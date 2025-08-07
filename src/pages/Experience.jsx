import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Experience = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredCard, setHoveredCard] = useState(null);

    const categories = [
        { id: 'all', name: 'All Experiences' },
        { id: 'wellness', name: 'Spa & Wellness' },
        { id: 'adventure', name: 'Adventure' },
        { id: 'cultural', name: 'Cultural' },
        { id: 'dining', name: 'Culinary' },
        { id: 'family', name: 'Family Fun' }
    ];

    const experiences = [
        {
            id: 1,
            title: "Luxury Spa Retreat",
            category: "wellness",
            price: 280,
            duration: "3 hours",
            rating: 4.9,
            reviews: 127,
            image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&h=300&fit=crop",
            description: "Indulge in a rejuvenating spa experience with premium treatments and serene ambiance.",
            highlights: ["Hot stone massage", "Aromatherapy", "Private relaxation suite", "Organic treatments"],
            badge: "Most Popular"
        },
        {
            id: 2,
            title: "Mountain Adventure Expedition",
            category: "adventure",
            price: 450,
            duration: "Full day",
            rating: 4.8,
            reviews: 89,
            image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=300&fit=crop",
            description: "Embark on thrilling mountain adventures with professional guides and stunning views.",
            highlights: ["Rock climbing", "Hiking trails", "Wildlife spotting", "Professional guide"],
            badge: null
        },
        {
            id: 3,
            title: "Local Cultural Immersion",
            category: "cultural",
            price: 180,
            duration: "4 hours",
            rating: 4.7,
            reviews: 156,
            image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c0e?w=500&h=300&fit=crop",
            description: "Discover authentic local traditions, crafts, and cultural heritage with native guides.",
            highlights: ["Traditional crafts", "Local cuisine", "Historical sites", "Cultural performances"],
            badge: "Authentic"
        },
        {
            id: 4,
            title: "Gourmet Culinary Journey",
            category: "dining",
            price: 320,
            duration: "2.5 hours",
            rating: 4.9,
            reviews: 203,
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
            description: "Experience exceptional cuisine with master chefs and wine pairings.",
            highlights: ["5-course tasting", "Wine pairing", "Chef interaction", "Recipe secrets"],
            badge: "Chef's Special"
        },
        {
            id: 5,
            title: "Family Adventure Park",
            category: "family",
            price: 150,
            duration: "5 hours",
            rating: 4.6,
            reviews: 94,
            image: "https://images.unsplash.com/photo-1594736797933-d0cc4b8ec0c0?w=500&h=300&fit=crop",
            description: "Fun-filled activities and attractions perfect for families with children of all ages.",
            highlights: ["Water activities", "Adventure playground", "Mini golf", "Family dining"],
            badge: null
        },
        {
            id: 6,
            title: "Sunrise Yoga & Meditation",
            category: "wellness",
            price: 95,
            duration: "90 minutes",
            rating: 4.8,
            reviews: 78,
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
            description: "Start your day with peaceful yoga and meditation sessions at beautiful locations.",
            highlights: ["Sunrise views", "Guided meditation", "Yoga mats provided", "Healthy breakfast"],
            badge: "Early Bird"
        }
    ];

    const filteredExperiences = selectedCategory === 'all' 
        ? experiences 
        : experiences.filter(exp => exp.category === selectedCategory);

    const StarRating = ({ rating, reviews }) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        return (
            <div className="flex items-center gap-2">
                <div className="flex gap-1">
                    {[...Array(fullStars)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                    ))}
                    {hasHalfStar && (
                        <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                            <defs>
                                <clipPath id="half">
                                    <rect x="0" y="0" width="10" height="20"/>
                                </clipPath>
                            </defs>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipPath="url(#half)"/>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="#E5E7EB"/>
                        </svg>
                    )}
                </div>
                <span className="text-sm text-gray-600">{rating} ({reviews} reviews)</span>
            </div>
        );
    };

    const ExperienceCard = ({ experience }) => {
        const isHovered = hoveredCard === experience.id;

        return (
            <div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onMouseEnter={() => setHoveredCard(experience.id)}
                onMouseLeave={() => setHoveredCard(null)}
            >
                <div className="relative">
                    <img 
                        src={experience.image} 
                        alt={experience.title}
                        className="w-full h-56 object-cover transition-transform duration-300"
                        style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
                    />
                    {experience.badge && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {experience.badge}
                        </div>
                    )}
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2 transition-opacity duration-300">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                </div>
                
                <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-blue-600 font-medium capitalize">{experience.category}</span>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {experience.duration}
                        </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-playfair">{experience.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{experience.description}</p>
                    
                    <div className="mb-4">
                        <StarRating rating={experience.rating} reviews={experience.reviews} />
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                        {experience.highlights.slice(0, 3).map((highlight, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                {highlight}
                            </span>
                        ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-gray-900">${experience.price}</span>
                            <span className="text-gray-500 text-sm">per person</span>
                        </div>
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">Q</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900">QuickStay</span>
                        </Link>
                        
                        <div className="hidden md:flex items-center gap-8">
                            <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
                            <Link to="/rooms" className="text-gray-600 hover:text-gray-900 transition-colors">Rooms</Link>
                            <Link to="/experience" className="text-blue-600 font-medium">Experiences</Link>
                            <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</Link>
                        </div>
                        
                        <Link to="/login" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
                            Login
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-6 py-24">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-playfair">
                            Unforgettable
                            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                Experiences
                            </span>
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                            Discover extraordinary adventures, authentic cultural experiences, and luxury amenities 
                            that transform your stay into lasting memories.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105">
                                Explore Experiences
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all">
                                View Packages
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">Why Choose Our Experiences?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We curate the finest experiences to ensure every moment of your journey is exceptional</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Curated Quality</h3>
                            <p className="text-gray-600">Every experience is carefully selected and vetted for the highest standards</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Guides</h3>
                            <p className="text-gray-600">Professional, knowledgeable guides ensure safe and enriching experiences</p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Booking</h3>
                            <p className="text-gray-600">Easy booking with flexible cancellation and personalized scheduling</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                    selectedCategory === category.id
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experiences Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">
                            {selectedCategory === 'all' ? 'All Experiences' : categories.find(c => c.id === selectedCategory)?.name}
                        </h2>
                        <p className="text-gray-600">Discover amazing activities and create unforgettable memories</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredExperiences.map((experience) => (
                            <ExperienceCard key={experience.id} experience={experience} />
                        ))}
                    </div>
                    
                    {filteredExperiences.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No experiences found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Ready for Your Next Adventure?</h2>
                    <p className="text-xl text-blue-100 mb-8">Join thousands of satisfied guests who have created lasting memories with us</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
                            Browse All Experiences
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Experience;
