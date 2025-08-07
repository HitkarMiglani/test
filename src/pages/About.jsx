import React from 'react';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="min-h-screen">
            {/* Main content area */}
            <div className="pt-20 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-8">About QuickStay</h1>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-6">
                            Welcome to QuickStay, your premier destination for luxury hotel bookings around the world. 
                            We specialize in curating exceptional accommodations that deliver unparalleled comfort and 
                            unforgettable experiences.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Since our founding, we've been committed to connecting discerning travelers with the world's 
                            most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
                        </p>
                        <p className="text-gray-600">
                            Our team of travel experts carefully selects each property to ensure it meets our high 
                            standards for service, amenities, and guest satisfaction.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default About;
