const jwt = require('jsonwebtoken');
const fs = require('fs').promises;
const path = require('path');

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
const DB_FILE = path.join(__dirname, '..', 'database', 'users.json');

// Read users from database
const readUsers = async () => {
    try {
        const data = await fs.readFile(DB_FILE, 'utf8');
        return JSON.parse(data).users;
    } catch (error) {
        return [];
    }
};

// Authentication middleware
const authenticateToken = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ 
                success: false,
                error: 'Access token required',
                details: 'Please provide a valid authorization token'
            });
        }

        // Verify JWT token
        const decoded = jwt.verify(token, JWT_SECRET);
        
        // Get user from database
        const users = await readUsers();
        const user = users.find(u => u.id === decoded.userId);
        
        if (!user) {
            return res.status(401).json({ 
                success: false,
                error: 'Invalid token',
                details: 'User not found or token is invalid'
            });
        }

        if (!user.isActive) {
            return res.status(401).json({ 
                success: false,
                error: 'Account deactivated',
                details: 'This account has been deactivated'
            });
        }

        // Add user to request object (without password)
        req.user = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            createdAt: user.createdAt,
            lastLogin: user.lastLogin,
            isActive: user.isActive
        };

        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(403).json({ 
                success: false,
                error: 'Invalid token',
                details: 'The provided token is malformed'
            });
        } else if (error.name === 'TokenExpiredError') {
            return res.status(403).json({ 
                success: false,
                error: 'Token expired',
                details: 'Please login again'
            });
        } else {
            console.error('Authentication middleware error:', error);
            return res.status(500).json({ 
                success: false,
                error: 'Internal server error',
                details: 'Authentication failed'
            });
        }
    }
};

// Optional authentication middleware (doesn't fail if no token)
const optionalAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            req.user = null;
            return next();
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        const users = await readUsers();
        const user = users.find(u => u.id === decoded.userId);
        
        if (user && user.isActive) {
            req.user = {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                createdAt: user.createdAt,
                lastLogin: user.lastLogin,
                isActive: user.isActive
            };
        } else {
            req.user = null;
        }

        next();
    } catch (error) {
        // If token is invalid, just set user to null
        req.user = null;
        next();
    }
};

// Generate JWT token
const generateToken = (userId, email) => {
    return jwt.sign(
        { userId, email },
        JWT_SECRET,
        { expiresIn: '7d' }
    );
};

// Verify token without middleware
const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
};

module.exports = {
    authenticateToken,
    optionalAuth,
    generateToken,
    verifyToken
};
