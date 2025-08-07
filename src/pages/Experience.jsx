import React from 'react';
import Footer from '../components/Footer';

const Experience = () => {
    return (
        <div className="min-h-screen">
            {/* Main content area */}
            <div className="pt-20 pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-8">Experiences</h1>
                    <p className="text-gray-600 text-lg mb-12 max-w-2xl">
                        Discover unique experiences and activities that make your stay unforgettable. 
                        From spa treatments to adventure tours, we've curated the best local experiences.
                    </p>
                    
                    {/* Experience categories */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="h-48 bg-gray-200"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Spa & Wellness</h3>
                                <p className="text-gray-600">Rejuvenate with luxury spa treatments and wellness programs</p>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="h-48 bg-gray-200"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Adventure Tours</h3>
                                <p className="text-gray-600">Explore the destination with guided adventure activities</p>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            <div className="h-48 bg-gray-200"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Experiences</h3>
                                <p className="text-gray-600">Immerse yourself in local culture and traditions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Experience;
