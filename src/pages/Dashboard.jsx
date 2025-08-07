import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Footer from '../components/Footer';

const Dashboard = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated, logout, updateProfile, changePassword, deleteAccount, loading } = useAuth();
    
    const [activeTab, setActiveTab] = useState('profile');
    const [isEditing, setIsEditing] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    
    const [profileData, setProfileData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        address: ''
    });
    
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });
    
    const [deleteData, setDeleteData] = useState({
        password: '',
        confirmation: ''
    });
    
    const [message, setMessage] = useState({ type: '', content: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Redirect if not authenticated
    useEffect(() => {
        if (!loading && !isAuthenticated) {
            navigate('/login', { 
                state: { from: { pathname: '/dashboard' } },
                replace: true 
            });
        }
    }, [isAuthenticated, loading, navigate]);

    // Initialize profile data
    useEffect(() => {
        if (user) {
            setProfileData({
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                phone: user.profile?.phone || '',
                address: user.profile?.address || ''
            });
        }
    }, [user]);

    // Clear message after 5 seconds
    useEffect(() => {
        if (message.content) {
            const timer = setTimeout(() => {
                setMessage({ type: '', content: '' });
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    const handleProfileSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage({ type: '', content: '' });

        try {
            const result = await updateProfile(profileData);
            
            if (result.success) {
                setMessage({ type: 'success', content: 'Profile updated successfully!' });
                setIsEditing(false);
            } else {
                setMessage({ type: 'error', content: result.error || 'Failed to update profile' });
            }
        } catch (error) {
            setMessage({ type: 'error', content: error.message || 'Failed to update profile' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage({ type: '', content: '' });

        if (passwordData.newPassword !== passwordData.confirmNewPassword) {
            setMessage({ type: 'error', content: 'New passwords do not match' });
            setIsSubmitting(false);
            return;
        }

        try {
            const result = await changePassword(passwordData);
            
            if (result.success) {
                setMessage({ type: 'success', content: 'Password changed successfully!' });
                setPasswordData({
                    currentPassword: '',
                    newPassword: '',
                    confirmNewPassword: ''
                });
            } else {
                setMessage({ type: 'error', content: result.error || 'Failed to change password' });
            }
        } catch (error) {
            setMessage({ type: 'error', content: error.message || 'Failed to change password' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDeleteAccount = async (e) => {
        e.preventDefault();
        
        if (deleteData.confirmation !== 'DELETE') {
            setMessage({ type: 'error', content: 'Please type "DELETE" to confirm' });
            return;
        }

        setIsSubmitting(true);
        setMessage({ type: '', content: '' });

        try {
            const result = await deleteAccount(deleteData.password);
            
            if (result.success) {
                setMessage({ type: 'success', content: 'Account deleted successfully' });
                setTimeout(() => {
                    navigate('/', { replace: true });
                }, 2000);
            } else {
                setMessage({ type: 'error', content: result.error || 'Failed to delete account' });
            }
        } catch (error) {
            setMessage({ type: 'error', content: error.message || 'Failed to delete account' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleLogout = async () => {
        await logout();
        navigate('/', { replace: true });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null; // Will redirect via useEffect
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">Q</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900">QuickStay</span>
                        </Link>
                        
                        <div className="flex items-center gap-4">
                            <span className="text-gray-700">Welcome, {user?.firstName}!</span>
                            <button
                                onClick={handleLogout}
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">
                                    {user?.firstName?.[0]}{user?.lastName?.[0]}
                                </span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">
                                    {user?.firstName} {user?.lastName}
                                </h1>
                                <p className="text-blue-100">{user?.email}</p>
                                <p className="text-blue-100 text-sm">
                                    Member since {new Date(user?.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Message Display */}
                    {message.content && (
                        <div className={`mx-8 mt-6 p-4 rounded-lg ${
                            message.type === 'success' 
                                ? 'bg-green-50 border border-green-200 text-green-700' 
                                : 'bg-red-50 border border-red-200 text-red-700'
                        }`}>
                            {message.content}
                        </div>
                    )}

                    {/* Tabs */}
                    <div className="border-b border-gray-200">
                        <nav className="flex px-8">
                            {[
                                { id: 'profile', name: 'Profile', icon: '👤' },
                                { id: 'password', name: 'Password', icon: '🔒' },
                                { id: 'settings', name: 'Settings', icon: '⚙️' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`py-4 px-6 border-b-2 font-medium text-sm transition-colors ${
                                        activeTab === tab.id
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    <span className="mr-2">{tab.icon}</span>
                                    {tab.name}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="p-8">
                        {/* Profile Tab */}
                        {activeTab === 'profile' && (
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
                                    <button
                                        onClick={() => setIsEditing(!isEditing)}
                                        className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                                    >
                                        {isEditing ? 'Cancel' : 'Edit Profile'}
                                    </button>
                                </div>

                                <form onSubmit={handleProfileSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            value={profileData.firstName}
                                            onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
                                            disabled={!isEditing}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            value={profileData.lastName}
                                            onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
                                            disabled={!isEditing}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            value={user?.email || ''}
                                            disabled
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            value={profileData.phone}
                                            onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                                            disabled={!isEditing}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Address
                                        </label>
                                        <textarea
                                            value={profileData.address}
                                            onChange={(e) => setProfileData(prev => ({ ...prev, address: e.target.value }))}
                                            disabled={!isEditing}
                                            rows={3}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                                            placeholder="Enter your address"
                                        />
                                    </div>

                                    {isEditing && (
                                        <div className="md:col-span-2">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50"
                                            >
                                                {isSubmitting ? 'Saving...' : 'Save Changes'}
                                            </button>
                                        </div>
                                    )}
                                </form>
                            </div>
                        )}

                        {/* Password Tab */}
                        {activeTab === 'password' && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Change Password</h2>
                                
                                <form onSubmit={handlePasswordSubmit} className="max-w-md space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Current Password
                                        </label>
                                        <input
                                            type="password"
                                            value={passwordData.currentPassword}
                                            onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            value={passwordData.newPassword}
                                            onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                                            required
                                            minLength={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Confirm New Password
                                        </label>
                                        <input
                                            type="password"
                                            value={passwordData.confirmNewPassword}
                                            onChange={(e) => setPasswordData(prev => ({ ...prev, confirmNewPassword: e.target.value }))}
                                            required
                                            minLength={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Changing...' : 'Change Password'}
                                    </button>
                                </form>
                            </div>
                        )}

                        {/* Settings Tab */}
                        {activeTab === 'settings' && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h2>
                                
                                <div className="space-y-8">
                                    {/* Account Info */}
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-lg font-medium text-gray-900 mb-4">Account Information</h3>
                                        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">Account Created</dt>
                                                <dd className="text-sm text-gray-900">{new Date(user?.createdAt).toLocaleDateString()}</dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">Last Login</dt>
                                                <dd className="text-sm text-gray-900">
                                                    {user?.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'Never'}
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">Account Status</dt>
                                                <dd className="text-sm text-green-600">Active</dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">Email Verified</dt>
                                                <dd className="text-sm text-gray-900">
                                                    {user?.emailVerified ? '✅ Verified' : '❌ Not Verified'}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>

                                    {/* Danger Zone */}
                                    <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                                        <h3 className="text-lg font-medium text-red-900 mb-4">Danger Zone</h3>
                                        <p className="text-sm text-red-700 mb-4">
                                            Once you delete your account, there is no going back. Please be certain.
                                        </p>
                                        <button
                                            onClick={() => setShowDeleteModal(true)}
                                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                                        >
                                            Delete Account
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Delete Account Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg max-w-md w-full p-6">
                        <h3 className="text-lg font-bold text-red-900 mb-4">Delete Account</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                        </p>
                        
                        <form onSubmit={handleDeleteAccount} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Enter your password to confirm
                                </label>
                                <input
                                    type="password"
                                    value={deleteData.password}
                                    onChange={(e) => setDeleteData(prev => ({ ...prev, password: e.target.value }))}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Type "DELETE" to confirm
                                </label>
                                <input
                                    type="text"
                                    value={deleteData.confirmation}
                                    onChange={(e) => setDeleteData(prev => ({ ...prev, confirmation: e.target.value }))}
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowDeleteModal(false)}
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Deleting...' : 'Delete Account'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Dashboard;
