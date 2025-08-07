const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

// Middleware
app.use(cors());
app.use(express.json());

// Database file path
const DB_FILE = path.join(__dirname, 'database', 'users.json');

// Ensure database directory exists
const ensureDBDir = async () => {
    const dbDir = path.dirname(DB_FILE);
    try {
        await fs.access(dbDir);
    } catch {
        await fs.mkdir(dbDir, { recursive: true });
    }
};

// Initialize database file if it doesn't exist
const initializeDB = async () => {
    await ensureDBDir();
    try {
        await fs.access(DB_FILE);
    } catch {
        await fs.writeFile(DB_FILE, JSON.stringify({ users: [] }, null, 2));
    }
};

// Read users from database
const readUsers = async () => {
    try {
        const data = await fs.readFile(DB_FILE, 'utf8');
        return JSON.parse(data).users;
    } catch (error) {
        return [];
    }
};

// Write users to database
const writeUsers = async (users) => {
    const data = { users };
    await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2));
};

// Authentication middleware
const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        const users = await readUsers();
        const user = users.find(u => u.id === decoded.userId);
        
        if (!user) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        req.user = { ...user };
        delete req.user.password; // Remove password from user object
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Invalid or expired token' });
    }
};

// Generate user ID
const generateUserId = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

// Routes

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Register endpoint
app.post('/api/auth/register', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Validation
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ 
                error: 'All fields are required',
                details: 'Please provide firstName, lastName, email, and password'
            });
        }

        if (password.length < 6) {
            return res.status(400).json({ 
                error: 'Password too short',
                details: 'Password must be at least 6 characters long'
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                error: 'Invalid email format',
                details: 'Please provide a valid email address'
            });
        }

        const users = await readUsers();

        // Check if user already exists
        const existingUser = users.find(user => user.email.toLowerCase() === email.toLowerCase());
        if (existingUser) {
            return res.status(400).json({ 
                error: 'User already exists',
                details: 'An account with this email already exists'
            });
        }

        // Hash password
        const saltRounds = 12;
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
            isActive: true
        };

        users.push(newUser);
        await writeUsers(users);

        // Generate JWT token
        const token = jwt.sign(
            { userId: newUser.id, email: newUser.email },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        // Return user data without password
        const userResponse = {
            id: newUser.id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            createdAt: newUser.createdAt
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
            error: 'Internal server error',
            details: 'Failed to register user'
        });
    }
});

// Login endpoint
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ 
                error: 'Email and password are required',
                details: 'Please provide both email and password'
            });
        }

        const users = await readUsers();

        // Find user
        const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
        if (!user) {
            return res.status(401).json({ 
                error: 'Invalid credentials',
                details: 'No account found with this email address'
            });
        }

        if (!user.isActive) {
            return res.status(401).json({ 
                error: 'Account deactivated',
                details: 'This account has been deactivated'
            });
        }

        // Check password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ 
                error: 'Invalid credentials',
                details: 'Incorrect password'
            });
        }

        // Update last login
        user.lastLogin = new Date().toISOString();
        await writeUsers(users);

        // Generate JWT token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        // Return user data without password
        const userResponse = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            createdAt: user.createdAt,
            lastLogin: user.lastLogin
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
            error: 'Internal server error',
            details: 'Failed to process login'
        });
    }
});

// Get current user profile
app.get('/api/auth/profile', authenticateToken, (req, res) => {
    res.json({
        success: true,
        user: req.user
    });
});

// Update user profile
app.put('/api/auth/profile', authenticateToken, async (req, res) => {
    try {
        const { firstName, lastName } = req.body;
        
        if (!firstName || !lastName) {
            return res.status(400).json({ 
                error: 'First name and last name are required'
            });
        }

        const users = await readUsers();
        const userIndex = users.findIndex(u => u.id === req.user.id);
        
        if (userIndex === -1) {
            return res.status(404).json({ error: 'User not found' });
        }

        users[userIndex].firstName = firstName.trim();
        users[userIndex].lastName = lastName.trim();
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
            error: 'Internal server error',
            details: 'Failed to update profile'
        });
    }
});

// Change password
app.put('/api/auth/change-password', authenticateToken, async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        if (!currentPassword || !newPassword) {
            return res.status(400).json({ 
                error: 'Current password and new password are required'
            });
        }

        if (newPassword.length < 6) {
            return res.status(400).json({ 
                error: 'New password must be at least 6 characters long'
            });
        }

        const users = await readUsers();
        const userIndex = users.findIndex(u => u.id === req.user.id);
        
        if (userIndex === -1) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Verify current password
        const passwordMatch = await bcrypt.compare(currentPassword, users[userIndex].password);
        if (!passwordMatch) {
            return res.status(401).json({ 
                error: 'Current password is incorrect'
            });
        }

        // Hash new password
        const saltRounds = 12;
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
            error: 'Internal server error',
            details: 'Failed to change password'
        });
    }
});

// Logout endpoint (optional - mainly for client-side token removal)
app.post('/api/auth/logout', authenticateToken, (req, res) => {
    res.json({
        success: true,
        message: 'Logged out successfully'
    });
});

// Get all users (admin endpoint - for testing)
app.get('/api/admin/users', authenticateToken, async (req, res) => {
    try {
        const users = await readUsers();
        const sanitizedUsers = users.map(user => ({
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            createdAt: user.createdAt,
            lastLogin: user.lastLogin,
            isActive: user.isActive
        }));

        res.json({
            success: true,
            users: sanitizedUsers,
            count: sanitizedUsers.length
        });
    } catch (error) {
        console.error('Get users error:', error);
        res.status(500).json({ 
            error: 'Internal server error',
            details: 'Failed to fetch users'
        });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ 
        error: 'Internal server error',
        details: 'Something went wrong'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ 
        error: 'Route not found',
        details: `${req.method} ${req.originalUrl} not found`
    });
});

// Initialize database and start server
const startServer = async () => {
    try {
        await initializeDB();
        app.listen(PORT, () => {
            console.log(`🚀 Authentication server running on port ${PORT}`);
            console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
            console.log(`🔐 Database: ${DB_FILE}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();

module.exports = app;
