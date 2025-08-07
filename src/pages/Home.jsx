import React from 'react';
import Hero from '../components/Hero';
import HotelCard from '../components/HotelCard';
import TestimonialCard from '../components/TestimonialCard';
import OfferCard from '../components/OfferCard';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { testimonials, exclusiveOffers } from '../assets/assets';

const Home = () => {
    // Sample hotel data matching the design
    const featuredHotels = [
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
            name: "The Grand Resort",
            location: "Maldives", 
            price: "450",
            rating: "4.9",
            image: "https://api.builder.io/api/v1/image/assets/TEMP/e98651866ae77f13abdccd576cf5c5eb82f4b745?width=550"
        },
        {
            id: 3,
            name: "The Grand Resort",
            location: "Maldives",
            price: "450", 
            rating: "4.9",
            image: "https://api.builder.io/api/v1/image/assets/TEMP/11438ffaad24cfb204b614a9e28ce03ad88f9796?width=550"
        }
    ];

    // Offer data matching the design
    const offers = [
        {
            id: 1,
            title: "Summer Escape Package",
            description: "Enjoy a complimentary night and daily breakfast",
            priceOff: 25,
            expiryDate: "Aug 31",
            image: "https://api.builder.io/api/v1/image/assets/TEMP/931a76c6bf9ababe915914787ea8897ba5b584e5?width=746"
        },
        {
            id: 2,
            title: "Romantic Getaway",
            description: "Special couples package including spa treatment",
            priceOff: 20,
            expiryDate: "Sep 20",
            image: "https://api.builder.io/api/v1/image/assets/TEMP/bc0619cf3a582590dc7502c93f3231cbcc24eb15?width=746"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Hero />

            {/* Featured Hotels Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-playfair font-medium text-gray-900 mb-4">
                            Featured Hotels
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences
                        </p>
                    </div>

                    {/* Hotel Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {featuredHotels.map((hotel, index) => (
                            <HotelCard 
                                key={hotel.id} 
                                hotel={hotel} 
                                showBadge={index === 0 || index === 2}
                            />
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="text-center">
                        <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded font-medium hover:bg-gray-50 transition-colors">
                            View All Hotels
                        </button>
                    </div>
                </div>
            </section>

            {/* Exclusive Offers Section */}
            <section className="py-20 px-6 bg-gray-50/50">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl font-playfair font-medium text-gray-900 mb-4">
                            Exclusive Offers
                        </h2>
                        <p className="text-gray-600 max-w-lg">
                            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {offers.map((offer) => (
                            <OfferCard key={offer.id} offer={offer} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-6 bg-blue-50/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-playfair font-medium text-gray-900 mb-4">
                            What Our Guests Say
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover why discerning travelers choose QuickStay for their luxury accommodations around the world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.slice(0, 2).map((testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <Newsletter />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
