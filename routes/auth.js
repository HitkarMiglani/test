const express = require('express');
const bcrypt = require('bcryptjs');
const fs = require('fs').promises;
const path = require('path');
const { authenticateToken, generateToken } = require('../middleware/auth');

const router = express.Router();
const DB_FILE = path.join(__dirname, '..', 'database', 'users.json');

// Utility functions
const readUsers = async () => {
    try {
        const data = await fs.readFile(DB_FILE, 'utf8');
        return JSON.parse(data).users;
    } catch (error) {
        return [];
    }
};

const writeUsers = async (users) => {
    const data = { users };
    await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));
};

const generateUserId = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

// Validation functions
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    return password && password.length >= 6;
};

const validateName = (name) => {
    return name && name.trim().length >= 2;
};

// Register endpoint
router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword } = req.body;

        // Validation
        const errors = [];

        if (!validateName(firstName)) {
            errors.push('First name must be at least 2 characters long');
        }

        if (!validateName(lastName)) {
            errors.push('Last name must be at least 2 characters long');
        }

        if (!validateEmail(email)) {
            errors.push('Please provide a valid email address');
        }

        if (!validatePassword(password)) {
            errors.push('Password must be at least 6 characters long');
        }

        if (password !== confirmPassword) {
            errors.push('Passwords do not match');
        }

        if (errors.length > 0) {
            return res.status(400).json({
                success: false,
                error: 'Validation failed',
                details: errors
            });
        }

        const users = await readUsers();

        // Check if user already exists
        const existingUser = users.find(user => 
            user.email.toLowerCase() === email.toLowerCase()
        );

        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: 'User already exists',
                details: 'An account with this email already exists'
            });
        }

        // Hash password
        const saltRounds = parseInt(process.env.BCRYPT_ROUNDS) || 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create new user
        const newUser = {
            id: generateUserId(),
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.toLowerCase().trim(),
            password: hashedPassword,
            createdAt: new Date().toISOString(),
            lastLogin: null,
            isActive: true,
            emailVerified: false,
            profile: {
                avatar: null,
                phone: null,
                address: null,
                preferences: {}
            }
        };

        users.push(newUser);
        await writeUsers(users);

        // Generate JWT token
        const token = generateToken(newUser.id, newUser.email);

        // Return user data without password
        const userResponse = {
            id: newUser.id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            createdAt: newUser.createdAt,
            emailVerified: newUser.emailVerified,
            profile: newUser.profile
        };

        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            user: userResponse,
            token
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error',
            details: 'Failed to register user'
        });
    }
});

// Login endpoint
router.post('/login', async (req, res) => {
    try {
        const { email, password, rememberMe = false } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                error: 'Email and password are required',
                details: 'Please provide both email and password'
            });
        }

        const users = await readUsers();

        // Find user
        const user = users.find(u => 
            u.email.toLowerCase() === email.toLowerCase()
        );

        if (!user) {
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials',
                details: 'No account found with this email address'
            });
        }

        if (!user.isActive) {
            return res.status(401).json({
                success: false,
                error: 'Account deactivated',
                details: 'This account has been deactivated. Please contact support.'
            });
        }

        // Check password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials',
                details: 'Incorrect password'
            });
        }

        // Update last login
        const userIndex = users.findIndex(u => u.id === user.id);
        users[userIndex].lastLogin = new Date().toISOString();
        await writeUsers(users);

        // Generate JWT token (longer expiry if rememberMe is true)
        const tokenExpiry = rememberMe ? '30d' : '7d';
        const token = generateToken(user.id, user.email, tokenExpiry);

        // Return user data without password
        const userResponse = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            createdAt: user.createdAt,
            lastLogin: users[userIndex].lastLogin,
            emailVerified: user.emailVerified,
            profile: user.profile
        };

        res.json({
            success: true,
            message: 'Login successful',
            user: userResponse,
            token
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error',
            details: 'Failed to process login'
        });
    }
});

// Get current user profile
router.get('/profile', authenticateToken, (req, res) => {
    res.json({
        success: true,
        user: req.user
    });
});

// Update user profile
router.put('/profile', authenticateToken, async (req, res) => {
    try {
        const { firstName, lastName, phone, address } = req.body;
        
        const errors = [];

        if (firstName && !validateName(firstName)) {
            errors.push('First name must be at least 2 characters long');
        }

        if (lastName && !validateName(lastName)) {
            errors.push('Last name must be at least 2 characters long');
        }

        if (errors.length > 0) {
            return res.status(400).json({
                success: false,
                error: 'Validation failed',
                details: errors
            });
        }

        const users = await readUsers();
        const userIndex = users.findIndex(u => u.id === req.user.id);
        
        if (userIndex === -1) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        // Update user data
        if (firstName) users[userIndex].firstName = firstName.trim();
        if (lastName) users[userIndex].lastName = lastName.trim();
        if (phone !== undefined) users[userIndex].profile.phone = phone;
        if (address !== undefined) users[userIndex].profile.address = address;
        
        users[userIndex].updatedAt = new Date().toISOString();

        await writeUsers(users);

        const updatedUser = { ...users[userIndex] };
        delete updatedUser.password;

        res.json({
            success: true,
            message: 'Profile updated successfully',
            user: updatedUser
        });

    } catch (error) {
        console.error('Profile update error:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error',
            details: 'Failed to update profile'
        });
    }
});

// Change password
router.put('/change-password', authenticateToken, async (req, res) => {
    try {
        const { currentPassword, newPassword, confirmNewPassword } = req.body;

        const errors = [];

        if (!currentPassword) {
            errors.push('Current password is required');
        }

        if (!validatePassword(newPassword)) {
            errors.push('New password must be at least 6 characters long');
        }

        if (newPassword !== confirmNewPassword) {
            errors.push('New passwords do not match');
        }

        if (errors.length > 0) {
            return res.status(400).json({
                success: false,
                error: 'Validation failed',
                details: errors
            });
        }

        const users = await readUsers();
        const userIndex = users.findIndex(u => u.id === req.user.id);
        
        if (userIndex === -1) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        // Verify current password
        const passwordMatch = await bcrypt.compare(currentPassword, users[userIndex].password);
        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                error: 'Current password is incorrect'
            });
        }

        // Hash new password
        const saltRounds = parseInt(process.env.BCRYPT_ROUNDS) || 12;
        const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

        users[userIndex].password = hashedNewPassword;
        users[userIndex].updatedAt = new Date().toISOString();

        await writeUsers(users);

        res.json({
            success: true,
            message: 'Password changed successfully'
        });

    } catch (error) {
        console.error('Password change error:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error',
            details: 'Failed to change password'
        });
    }
});

// Logout endpoint
router.post('/logout', authenticateToken, (req, res) => {
    // In a real application, you might want to blacklist the token
    res.json({
        success: true,
        message: 'Logged out successfully'
    });
});

// Delete account
router.delete('/account', authenticateToken, async (req, res) => {
    try {
        const { password } = req.body;

        if (!password) {
            return res.status(400).json({
                success: false,
                error: 'Password confirmation required',
                details: 'Please provide your password to confirm account deletion'
            });
        }

        const users = await readUsers();
        const userIndex = users.findIndex(u => u.id === req.user.id);
        
        if (userIndex === -1) {
            return res.status(404).json({
                success: false,
                error: 'User not found'
            });
        }

        // Verify password
        const passwordMatch = await bcrypt.compare(password, users[userIndex].password);
        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                error: 'Incorrect password'
            });
        }

        // Remove user from database
        users.splice(userIndex, 1);
        await writeUsers(users);

        res.json({
            success: true,
            message: 'Account deleted successfully'
        });

    } catch (error) {
        console.error('Account deletion error:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error',
            details: 'Failed to delete account'
        });
    }
});

module.exports = router;
