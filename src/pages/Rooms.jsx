import React from 'react';
import Footer from '../components/Footer';
import HotelCard from '../components/HotelCard';

const Rooms = () => {
    // Sample hotels data
    const hotels = [
        {
            id: 1,
            name: "The Grand Resort",
            location: "Maldives",
            price: "450",
            rating: "4.9",
            image: "https://api.builder.io/api/v1/image/assets/TEMP/a52f2daac88928eeeeb82b80591a0d40c1bef094?width=550"
        },
        {
            id: 2,
            name: "Ocean View Villa",
            location: "Bali",
            price: "320",
            rating: "4.8",
            image: "https://api.builder.io/api/v1/image/assets/TEMP/e98651866ae77f13abdccd576cf5c5eb82f4b745?width=550"
        },
        {
            id: 3,
            name: "Mountain Retreat",
            location: "Switzerland",
            price: "580",
            rating: "4.9",
            image: "https://api.builder.io/api/v1/image/assets/TEMP/11438ffaad24cfb204b614a9e28ce03ad88f9796?width=550"
        },
        {
            id: 4,
            name: "City Luxury Hotel",
            location: "Tokyo",
            price: "390",
            rating: "4.7",
            image: "https://api.builder.io/api/v1/image/assets/TEMP/a52f2daac88928eeeeb82b80591a0d40c1bef094?width=550"
        },
        {
            id: 5,
            name: "Beach Resort",
            location: "Hawaii",
            price: "480",
            rating: "4.8",
            image: "https://api.builder.io/api/v1/image/assets/TEMP/e98651866ae77f13abdccd576cf5c5eb82f4b745?width=550"
        },
        {
            id: 6,
            name: "Desert Oasis",
            location: "Dubai",
            price: "650",
            rating: "4.9",
            image: "https://api.builder.io/api/v1/image/assets/TEMP/11438ffaad24cfb204b614a9e28ce03ad88f9796?width=550"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Main content area */}
            <div className="pt-20 pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl font-playfair font-bold text-gray-900 mb-4">Hotels & Rooms</h1>
                        <p className="text-gray-600 text-lg max-w-2xl">
                            Discover our complete collection of luxury hotels and accommodations around the world. 
                            From intimate boutique properties to grand resorts, find your perfect stay.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="mb-8 flex flex-wrap gap-4">
                        <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>All Destinations</option>
                            <option>Maldives</option>
                            <option>Bali</option>
                            <option>Switzerland</option>
                            <option>Tokyo</option>
                            <option>Hawaii</option>
                            <option>Dubai</option>
                        </select>
                        
                        <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Price Range</option>
                            <option>$0 - $300</option>
                            <option>$300 - $500</option>
                            <option>$500+</option>
                        </select>
                        
                        <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Rating</option>
                            <option>4.5+ Stars</option>
                            <option>4.0+ Stars</option>
                            <option>3.5+ Stars</option>
                        </select>
                    </div>
                    
                    {/* Hotels Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {hotels.map((hotel, index) => (
                            <HotelCard 
                                key={hotel.id} 
                                hotel={hotel} 
                                showBadge={index === 0 || index === 2}
                                badgeText={index === 0 ? "Best Seller" : "Popular"}
                            />
                        ))}
                    </div>
                    
                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <button className="bg-black text-white px-8 py-3 rounded font-medium hover:bg-gray-800 transition-colors">
                            Load More Hotels
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Rooms;
