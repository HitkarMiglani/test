import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-start">
            {/* Hero Image */}
            <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/c9ea28391a0f1d791a00761415b2cb93834ae0a8?width=2880" 
                alt="Luxury hotel"
                className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <div className="max-w-2xl">
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/50 text-white text-sm mb-8">
                        The Ultimate Hotel Experience
                    </div>
                    
                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white leading-tight mb-6">
                        Discover Your Perfect
                        <br />
                        Getaway Destination
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="text-white text-lg mb-12 max-w-lg">
                        Unparalleled luxury and comfort await at the world's most exclusive
                        hotels and resorts. Start your journey today.
                    </p>
                </div>
                
                {/* Search Form */}
                <div className="bg-white rounded-lg p-4 max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        {/* Destination */}
                        <div>
                            <label className="block text-gray-600 text-sm mb-2">Destination</label>
                            <div className="relative">
                                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.5 6.875C4.74054 6.875 4.125 6.25946 4.125 5.5C4.125 4.74054 4.74054 4.125 5.5 4.125C6.25946 4.125 6.875 4.74054 6.875 5.5C6.875 6.25946 6.25946 6.875 5.5 6.875ZM5.5 3.20833C4.23454 3.20833 3.20833 4.23408 3.20833 5.5C3.20833 6.76592 4.23454 7.79167 5.5 7.79167C6.76546 7.79167 7.79167 6.76592 7.79167 5.5C7.79167 4.23408 6.76546 3.20833 5.5 3.20833ZM5.5 13.2917C4.73779 13.2958 0.916667 7.41629 0.916667 5.5C0.916667 2.96908 2.96863 0.916667 5.5 0.916667C8.03137 0.916667 10.0833 2.96908 10.0833 5.5C10.0833 7.39062 6.25029 13.2958 5.5 13.2917ZM5.5 0C2.46263 0 0 2.46263 0 5.5C0 7.79992 4.58563 14.6717 5.5 14.6667C6.40017 14.6717 11 7.76875 11 5.5C11 2.46263 8.53738 0 5.5 0Z"/>
                                </svg>
                                <input 
                                    type="text" 
                                    placeholder="Dubai"
                                    defaultValue="Dubai"
                                    className="w-full pl-10 pr-3 py-3 border-0 focus:ring-0 text-black"
                                />
                            </div>
                        </div>
                        
                        {/* Check In */}
                        <div>
                            <label className="block text-gray-600 text-sm mb-2">Check in</label>
                            <div className="relative">
                                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M1 5.66667H13M3.66667 1V2.33333M10.3333 1V2.33333M3.13333 13H10.8667C11.6134 13 11.9868 13 12.272 12.8547C12.5229 12.7269 12.7269 12.5229 12.8547 12.272C13 11.9868 13 11.6134 13 10.8667V4.46667C13 3.71993 13 3.34656 12.8547 3.06135C12.7269 2.81046 12.5229 2.60649 12.272 2.47866C11.9868 2.33333 11.6134 2.33333 10.8667 2.33333H3.13333C2.3866 2.33333 2.01323 2.33333 1.72801 2.47866C1.47713 2.60649 1.27315 2.81046 1.14533 3.06135C1 3.34656 1 3.71993 1 4.46667V10.8667C1 11.6134 1 11.9868 1.14533 12.272C1.27315 12.5229 1.47713 12.7269 1.72801 12.8547C2.01323 13 2.38659 13 3.13333 13Z"/>
                                </svg>
                                <input 
                                    type="text" 
                                    placeholder="Mar 15, 2025"
                                    defaultValue="Mar 15, 2025"
                                    className="w-full pl-10 pr-3 py-3 border-0 focus:ring-0 text-black"
                                />
                            </div>
                        </div>
                        
                        {/* Check Out */}
                        <div>
                            <label className="block text-gray-600 text-sm mb-2">Check out</label>
                            <div className="relative">
                                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M1 5.66667H13M3.66667 1V2.33333M10.3333 1V2.33333M3.13333 13H10.8667C11.6134 13 11.9868 13 12.272 12.8547C12.5229 12.7269 12.7269 12.5229 12.8547 12.272C13 11.9868 13 11.6134 13 10.8667V4.46667C13 3.71993 13 3.34656 12.8547 3.06135C12.7269 2.81046 12.5229 2.60649 12.272 2.47866C11.9868 2.33333 11.6134 2.33333 10.8667 2.33333H3.13333C2.3866 2.33333 2.01323 2.33333 1.72801 2.47866C1.47713 2.60649 1.27315 2.81046 1.14533 3.06135C1 3.34656 1 3.71993 1 4.46667V10.8667C1 11.6134 1 11.9868 1.14533 12.272C1.27315 12.5229 1.47713 12.7269 1.72801 12.8547C2.01323 13 2.38659 13 3.13333 13Z"/>
                                </svg>
                                <input 
                                    type="text" 
                                    placeholder="Mar 15, 2025"
                                    defaultValue="Mar 15, 2025"
                                    className="w-full pl-10 pr-3 py-3 border-0 focus:ring-0 text-black"
                                />
                            </div>
                        </div>
                        
                        {/* Guests and Search */}
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <label className="block text-gray-600 text-sm mb-2">Guests</label>
                                <input 
                                    type="text" 
                                    placeholder="2"
                                    defaultValue="2"
                                    className="w-full px-3 py-3 border-0 focus:ring-0 text-black"
                                />
                            </div>
                            <button className="bg-black text-white px-6 py-3 rounded flex items-center gap-2 font-medium">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.53125 13.183C11.0781 12.1006 12.2653 9.15845 11.1829 6.61156C10.1005 4.06468 7.15842 2.87748 4.61154 3.95988C2.06466 5.04228 0.877458 7.9844 1.95986 10.5313C3.04226 13.0782 5.98437 14.2654 8.53125 13.183Z" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.1143 12.1133L14.0004 16" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
