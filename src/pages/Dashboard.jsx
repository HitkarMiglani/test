import React from 'react';
import Footer from '../components/Footer';

const Dashboard = () => {
    return (
        <div className="min-h-screen">
            {/* Main content area */}
            <div className="pt-20 pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-8">Dashboard</h1>
                    
                    {/* Dashboard content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-sm p-6 border">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">My Bookings</h3>
                            <p className="text-gray-600">View and manage your hotel reservations</p>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-sm p-6 border">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Favorites</h3>
                            <p className="text-gray-600">Your saved hotels and properties</p>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-sm p-6 border">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile</h3>
                            <p className="text-gray-600">Update your account information</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Dashboard;
