import React, { createContext, useContext, useState, useEffect } from 'react';
import authService from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Initialize auth state
    useEffect(() => {
        const initializeAuth = async () => {
            try {
                setLoading(true);
                setError(null);

                // Check if we have a stored token
                if (authService.isAuthenticated()) {
                    // Verify token is still valid
                    const isValid = await authService.verifyToken();
                    if (isValid) {
                        setUser(authService.getCurrentUser());
                    }
                }
            } catch (error) {
                console.error('Auth initialization error:', error);
                setError('Failed to initialize authentication');
            } finally {
                setLoading(false);
            }
        };

        initializeAuth();
    }, []);

    // Register function
    const register = async (userData) => {
        try {
            setLoading(true);
            setError(null);

            const response = await authService.register(userData);
            
            if (response.success) {
                setUser(response.user);
                return { success: true, user: response.user };
            }

            return { success: false, error: response.error };
        } catch (error) {
            const errorMessage = error.message || 'Registration failed';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    // Login function
    const login = async (credentials) => {
        try {
            setLoading(true);
            setError(null);

            const response = await authService.login(credentials);
            
            if (response.success) {
                setUser(response.user);
                return { success: true, user: response.user };
            }

            return { success: false, error: response.error };
        } catch (error) {
            const errorMessage = error.message || 'Login failed';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    // Logout function
    const logout = async () => {
        try {
            setLoading(true);
            await authService.logout();
            setUser(null);
            setError(null);
        } catch (error) {
            console.error('Logout error:', error);
            // Clear local state even if API call fails
            setUser(null);
            setError(null);
        } finally {
            setLoading(false);
        }
    };

    // Update profile function
    const updateProfile = async (profileData) => {
        try {
            setLoading(true);
            setError(null);

            const response = await authService.updateProfile(profileData);
            
            if (response.success) {
                setUser(response.user);
                return { success: true, user: response.user };
            }

            return { success: false, error: response.error };
        } catch (error) {
            const errorMessage = error.message || 'Profile update failed';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    // Change password function
    const changePassword = async (passwordData) => {
        try {
            setLoading(true);
            setError(null);

            const response = await authService.changePassword(passwordData);
            
            if (response.success) {
                return { success: true };
            }

            return { success: false, error: response.error };
        } catch (error) {
            const errorMessage = error.message || 'Password change failed';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    // Delete account function
    const deleteAccount = async (password) => {
        try {
            setLoading(true);
            setError(null);

            const response = await authService.deleteAccount(password);
            
            if (response.success) {
                setUser(null);
                return { success: true };
            }

            return { success: false, error: response.error };
        } catch (error) {
            const errorMessage = error.message || 'Account deletion failed';
            setError(errorMessage);
            return { success: false, error: errorMessage };
        } finally {
            setLoading(false);
        }
    };

    // Refresh user data
    const refreshUser = async () => {
        try {
            const response = await authService.getProfile();
            if (response.success) {
                setUser(response.user);
            }
        } catch (error) {
            console.error('Failed to refresh user data:', error);
            // If token is invalid, logout user
            if (error.message.includes('token') || error.message.includes('unauthorized')) {
                logout();
            }
        }
    };

    // Clear error
    const clearError = () => {
        setError(null);
    };

    // Context value
    const value = {
        user,
        loading,
        error,
        isAuthenticated: !!user,
        register,
        login,
        logout,
        updateProfile,
        changePassword,
        deleteAccount,
        refreshUser,
        clearError
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
