const API_BASE_URL = 'http://localhost:5000/api';

class AuthService {
    constructor() {
        this.token = localStorage.getItem('authToken');
        this.user = JSON.parse(localStorage.getItem('user') || 'null');
    }

    // API request helper
    async apiRequest(endpoint, options = {}) {
        const url = `${API_BASE_URL}${endpoint}`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        };

        // Add auth token if available
        if (this.token) {
            config.headers.Authorization = `Bearer ${this.token}`;
        }

        try {
            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.details || data.error || 'Request failed');
            }

            return data;
        } catch (error) {
            console.error('API Request failed:', error);
            throw error;
        }
    }

    // Set authentication data
    setAuthData(token, user) {
        this.token = token;
        this.user = user;
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(user));
    }

    // Clear authentication data
    clearAuthData() {
        this.token = null;
        this.user = null;
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
    }

    // Register new user
    async register(userData) {
        try {
            const response = await this.apiRequest('/auth/register', {
                method: 'POST',
                body: JSON.stringify(userData),
            });

            if (response.success) {
                this.setAuthData(response.token, response.user);
            }

            return response;
        } catch (error) {
            throw new Error(error.message || 'Registration failed');
        }
    }

    // Login user
    async login(credentials) {
        try {
            const response = await this.apiRequest('/auth/login', {
                method: 'POST',
                body: JSON.stringify(credentials),
            });

            if (response.success) {
                this.setAuthData(response.token, response.user);
            }

            return response;
        } catch (error) {
            throw new Error(error.message || 'Login failed');
        }
    }

    // Logout user
    async logout() {
        try {
            if (this.token) {
                await this.apiRequest('/auth/logout', {
                    method: 'POST',
                });
            }
        } catch (error) {
            console.error('Logout request failed:', error);
        } finally {
            this.clearAuthData();
        }
    }

    // Get current user profile
    async getProfile() {
        try {
            const response = await this.apiRequest('/auth/profile');
            
            if (response.success) {
                this.user = response.user;
                localStorage.setItem('user', JSON.stringify(response.user));
            }

            return response;
        } catch (error) {
            // If token is invalid, clear auth data
            if (error.message.includes('token') || error.message.includes('unauthorized')) {
                this.clearAuthData();
            }
            throw error;
        }
    }

    // Update user profile
    async updateProfile(profileData) {
        try {
            const response = await this.apiRequest('/auth/profile', {
                method: 'PUT',
                body: JSON.stringify(profileData),
            });

            if (response.success) {
                this.user = response.user;
                localStorage.setItem('user', JSON.stringify(response.user));
            }

            return response;
        } catch (error) {
            throw new Error(error.message || 'Profile update failed');
        }
    }

    // Change password
    async changePassword(passwordData) {
        try {
            const response = await this.apiRequest('/auth/change-password', {
                method: 'PUT',
                body: JSON.stringify(passwordData),
            });

            return response;
        } catch (error) {
            throw new Error(error.message || 'Password change failed');
        }
    }

    // Delete account
    async deleteAccount(password) {
        try {
            const response = await this.apiRequest('/auth/account', {
                method: 'DELETE',
                body: JSON.stringify({ password }),
            });

            if (response.success) {
                this.clearAuthData();
            }

            return response;
        } catch (error) {
            throw new Error(error.message || 'Account deletion failed');
        }
    }

    // Check if user is authenticated
    isAuthenticated() {
        return !!(this.token && this.user);
    }

    // Get current user
    getCurrentUser() {
        return this.user;
    }

    // Get auth token
    getToken() {
        return this.token;
    }

    // Verify token validity
    async verifyToken() {
        if (!this.token) return false;

        try {
            await this.getProfile();
            return true;
        } catch (error) {
            this.clearAuthData();
            return false;
        }
    }

    // Health check
    async healthCheck() {
        try {
            const response = await this.apiRequest('/health');
            return response;
        } catch (error) {
            throw new Error('Backend server is not responding');
        }
    }
}

// Create and export a singleton instance
const authService = new AuthService();
export default authService;

// Export the class for testing
export { AuthService };
