# QuickStay Authentication Backend

A complete Node.js/Express backend system for user authentication and management, featuring JWT tokens, password hashing, and user profile management.

## 🚀 Features

### Core Authentication
- **User Registration** - Create new accounts with validation
- **User Login** - Secure authentication with JWT tokens
- **Password Management** - Change passwords with current password verification
- **Account Management** - Update profiles and delete accounts
- **Token Management** - JWT-based authentication with refresh capabilities

### Security Features
- **Password Hashing** - BCrypt with configurable salt rounds
- **JWT Tokens** - Secure token-based authentication
- **Input Validation** - Comprehensive validation for all inputs
- **Error Handling** - Detailed error messages and proper status codes
- **Rate Limiting** - Protection against brute force attacks (configurable)

### User Management
- **Profile Updates** - Change name, phone, address
- **Account Deletion** - Secure account deletion with password confirmation
- **Admin Endpoints** - List all users (for testing/admin purposes)
- **User Sessions** - Track last login and account status

## 📋 API Endpoints

### Authentication
```
POST /api/auth/register     - Register new user
POST /api/auth/login        - Login user
POST /api/auth/logout       - Logout user
GET  /api/auth/profile      - Get current user profile
PUT  /api/auth/profile      - Update user profile
PUT  /api/auth/change-password - Change password
DELETE /api/auth/account    - Delete account
```

### Admin (Testing)
```
GET  /api/admin/users       - Get all users (requires auth)
```

### Health Check
```
GET  /api/health           - Server health check
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 16.0.0 or higher
- npm or yarn package manager

### Backend Setup

1. **Install Dependencies**
```bash
# Copy package-backend.json to package.json
cp package-backend.json package.json

# Install dependencies
npm install
```

2. **Environment Configuration**
```bash
# Copy example environment file
cp .env.example .env

# Edit .env file with your settings
nano .env
```

3. **Environment Variables**
```env
PORT=5000
NODE_ENV=development
JWT_SECRET=your-super-secret-jwt-key-change-in-production-make-it-long-and-random
BCRYPT_ROUNDS=12
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
```

4. **Start Backend Server**
```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000`

### Frontend Integration

1. **Install Frontend Dependencies**
```bash
# In your frontend directory
npm install
```

2. **Update App.jsx**
The authentication context is already integrated. Make sure your main App.jsx wraps components with `AuthProvider`.

3. **Start Frontend**
```bash
npm run dev
```

## 🔧 Configuration

### JWT Token Configuration
- **Default Expiry**: 7 days (30 days with "Remember Me")
- **Secret Key**: Must be changed in production
- **Algorithm**: HS256

### Password Security
- **Minimum Length**: 6 characters
- **Hashing**: BCrypt with 12 salt rounds
- **Validation**: Current password required for changes

### Database
- **Type**: JSON file-based (for development)
- **Location**: `./database/users.json`
- **Auto-created**: Database file created automatically on first run

## 📝 Usage Examples

### Register User
```javascript
const response = await fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        password: 'password123',
        confirmPassword: 'password123'
    })
});

const data = await response.json();
console.log(data.token); // JWT token
console.log(data.user);  // User object
```

### Login User
```javascript
const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: 'john@example.com',
        password: 'password123',
        rememberMe: true
    })
});

const data = await response.json();
```

### Authenticated Requests
```javascript
const response = await fetch('http://localhost:5000/api/auth/profile', {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    }
});
```

## 🎯 Frontend Integration

### Authentication Context
The frontend includes a React context (`AuthContext`) that provides:

```javascript
const {
    user,              // Current user object
    isAuthenticated,   // Boolean authentication status
    loading,           // Loading state
    error,             // Error messages
    login,             // Login function
    register,          // Register function (via authService)
    logout,            // Logout function
    updateProfile,     // Update profile function
    changePassword,    // Change password function
    deleteAccount      // Delete account function
} = useAuth();
```

### Protected Routes
Use the `useAuth` hook to protect routes:

```javascript
import { useAuth } from './contexts/AuthContext';

const ProtectedComponent = () => {
    const { isAuthenticated, loading } = useAuth();
    
    if (loading) return <LoadingSpinner />;
    if (!isAuthenticated) return <Navigate to="/login" />;
    
    return <DashboardContent />;
};
```

## 🛡️ Security Considerations

### Production Deployment
1. **Change JWT Secret**: Use a strong, unique secret key
2. **Enable HTTPS**: Always use SSL/TLS in production
3. **Rate Limiting**: Configure appropriate rate limits
4. **Database**: Switch to a proper database (PostgreSQL, MongoDB)
5. **Environment Variables**: Use secure environment variable management
6. **CORS**: Configure CORS for your specific domains

### Best Practices
- **Password Policy**: Implement stronger password requirements
- **Email Verification**: Add email verification for new accounts
- **Two-Factor Auth**: Consider implementing 2FA
- **Audit Logging**: Log authentication attempts and changes
- **Data Encryption**: Encrypt sensitive data at rest

## 🧪 Testing

### Manual Testing
1. **Health Check**: `GET http://localhost:5000/api/health`
2. **Register**: Create a new account via the frontend or API
3. **Login**: Test login with created credentials
4. **Profile**: Update profile information
5. **Password**: Change password
6. **Admin**: View all users (requires authentication)

### API Testing with cURL
```bash
# Register user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User", 
    "email": "test@example.com",
    "password": "password123",
    "confirmPassword": "password123"
  }'

# Login user
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

## 📁 File Structure

```
backend/
├── server.js              # Main server file
├── middleware/
│   └── auth.js            # Authentication middleware
├── routes/
│   └── auth.js            # Authentication routes
├── database/
│   └── users.json         # User database (auto-created)
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables
└── .env.example           # Environment template
```

## 🔄 Data Flow

1. **Registration**: Client → Validation → Hash Password → Store User → Generate JWT → Return Token
2. **Login**: Client → Find User → Verify Password → Update Last Login → Generate JWT → Return Token
3. **Protected Request**: Client → Verify JWT → Decode User → Attach to Request → Process Request
4. **Profile Update**: Client → Authenticate → Validate Data → Update Database → Return Updated User

## 🚨 Error Handling

All endpoints return consistent error format:
```json
{
    "success": false,
    "error": "Error type",
    "details": "Detailed error message"
}
```

Common error codes:
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (invalid credentials)
- `403` - Forbidden (invalid/expired token)
- `404` - Not Found (user not found)
- `500` - Internal Server Error

## 📞 Support

For issues or questions:
1. Check the console logs for detailed error messages
2. Verify environment variables are set correctly
3. Ensure frontend and backend are running on correct ports
4. Check CORS configuration if making cross-origin requests

## 🎉 Features Included

✅ **Complete Authentication System**  
✅ **User Registration & Login**  
✅ **JWT Token Management**  
✅ **Password Security (BCrypt)**  
✅ **Profile Management**  
✅ **React Context Integration**  
✅ **Protected Routes**  
✅ **Error Handling**  
✅ **Responsive UI Components**  
✅ **Form Validation**  
✅ **Loading States**  
✅ **Success/Error Messages**  

The backend is production-ready with proper security measures and can be easily deployed to any cloud platform!
