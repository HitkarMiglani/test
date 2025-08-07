import React from 'react';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white pt-20 pb-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">About QuickStay</h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                        Redefining hospitality through exceptional accommodations and unforgettable experiences
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <div className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                Founded in 2020 with a vision to revolutionize the hospitality industry, QuickStay emerged
                                from a simple belief: every traveler deserves access to extraordinary accommodations that
                                create lasting memories.
                            </p>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                What started as a passion project between travel enthusiasts has grown into a global platform
                                connecting millions of travelers with handpicked properties that exceed expectations.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Today, we're proud to partner with over 10,000 premium properties worldwide, each carefully
                                vetted to ensure they meet our exacting standards for quality, service, and guest satisfaction.
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-3xl p-8">
                            <div className="grid grid-cols-2 gap-8 text-center">
                                <div>
                                    <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                                    <div className="text-gray-600">Premium Properties</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
                                    <div className="text-gray-600">Countries</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-blue-600 mb-2">2M+</div>
                                    <div className="text-gray-600">Happy Guests</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                                    <div className="text-gray-600">Satisfaction Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Values */}
            <div className="bg-gray-50 py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Our Mission & Values</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We're driven by core values that shape every aspect of our service and define our commitment to excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality First</h3>
                            <p className="text-gray-600">
                                Every property undergoes rigorous evaluation to ensure it meets our exceptional standards for comfort,
                                service, and amenities.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Guest-Centric</h3>
                            <p className="text-gray-600">
                                Your satisfaction is our priority. We go above and beyond to ensure every stay exceeds your
                                expectations and creates unforgettable memories.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Reach</h3>
                            <p className="text-gray-600">
                                From bustling cities to remote paradises, we connect you with extraordinary accommodations
                                in every corner of the world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* What Makes Us Different */}
            <div className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">What Makes Us Different</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We don't just book rooms – we craft experiences that transform your travels into extraordinary adventures
                        </p>
                    </div>

                    <div className="space-y-16">
                        <div className="flex flex-col lg:flex-row items-center gap-12">
                            <div className="lg:w-1/2">
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">Curated Excellence</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Our team of hospitality experts personally visits and evaluates every property. We don't just
                                    check ratings – we experience the service, test the amenities, and ensure every detail meets
                                    our stringent quality standards.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Personal property inspections
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        24/7 guest support
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Exclusive partnerships
                                    </li>
                                </ul>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🏨</div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Premium Standards</h4>
                                        <p className="text-gray-600">
                                            Every property must pass our comprehensive 50-point quality assessment
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                            <div className="lg:w-1/2">
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">Personalized Service</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    We believe every traveler is unique. Our AI-powered recommendation engine learns your
                                    preferences to suggest accommodations that perfectly match your style, budget, and
                                    travel goals.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Smart recommendations
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Concierge services
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Custom travel planning
                                    </li>
                                </ul>
                            </div>
                            <div className="lg:w-1/2">
                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🎯</div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-4">Tailored Experiences</h4>
                                        <p className="text-gray-600">
                                            From business trips to romantic getaways, we customize every recommendation
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-gray-50 py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Meet Our Leadership</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Passionate hospitality professionals dedicated to revolutionizing your travel experience
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-white">SK</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Kim</h3>
                            <p className="text-blue-600 font-medium mb-4">CEO & Founder</p>
                            <p className="text-gray-600 text-sm">
                                Former hospitality executive with 15+ years at luxury hotel chains. Passionate about
                                creating exceptional guest experiences.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-white">MP</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Marcus Peterson</h3>
                            <p className="text-purple-600 font-medium mb-4">CTO</p>
                            <p className="text-gray-600 text-sm">
                                Tech visionary with expertise in AI and machine learning. Leading our platform
                                innovation and personalization engine.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-white">AR</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Ana Rodriguez</h3>
                            <p className="text-green-600 font-medium mb-4">Head of Operations</p>
                            <p className="text-gray-600 text-sm">
                                Operations expert ensuring seamless partnerships with properties worldwide.
                                Committed to maintaining our quality standards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-playfair font-bold mb-6">Ready to Experience the Difference?</h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        Join millions of travelers who trust QuickStay for their most important journeys.
                        Discover your perfect stay today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                            Start Exploring
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default About;
