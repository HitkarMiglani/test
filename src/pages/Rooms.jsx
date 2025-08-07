import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Rooms = () => {
    // Sample hotels data based on Figma design
    const hotels = [
        {
            id: 1,
            name: "The Grand Resort",
            location: "San Diego, CA, USA",
            fullLocation: "Los Angeles, California, USA",
            price: "100",
            rating: "4.5",
            reviewCount: "200+",
            image: "https://api.builder.io/api/v1/image/assets/TEMP/70552a6d0a6a4169682d687d22775b1f0f9a2373",
            amenities: ["free wifi", "free breakfast", "room service"]
        },
        {
            id: 2,
            name: "The Regal Palace",
            location: "Skyline Boulevard, NY, USA",
            fullLocation: "Los Angeles, California, USA",
            price: "150",
            rating: "4.5",
            reviewCount: "200+",
            image: "https://api.builder.io/api/v1/image/assets/TEMP/d8b3f80c231bedec70e4979ff1d154978f23ae2a",
            amenities: ["free wifi", "free breakfast", "room service"]
        },
        {
            id: 3,
            name: "Velvet Nights Inn",
            location: "Beachfront Drive, CA, USA",
            fullLocation: "Los Angeles, California, USA",
            price: "120",
            rating: "4.5",
            reviewCount: "200+",
            image: "https://api.builder.io/api/v1/image/assets/TEMP/9ff99b25f105d4cf5adfe6fc15e2ea4e866afe4c",
            amenities: ["free wifi", "free breakfast", "room service"]
        },
        {
            id: 4,
            name: "Crystal Waters Resort",
            location: "Night Sky Parkway, AZ, USA",
            fullLocation: "Los Angeles, California, USA",
            price: "200",
            rating: "4.5",
            reviewCount: "200+",
            image: "https://api.builder.io/api/v1/image/assets/TEMP/586bab2f3026d1094e93884ee3eab15c8ebb789c",
            amenities: ["free wifi", "free breakfast", "room service"]
        },
        {
            id: 5,
            name: "Skyline Luxe Hotel",
            location: "Metro Avenue, Chicago, USA",
            fullLocation: "Los Angeles, California, USA",
            price: "250",
            rating: "4.5",
            reviewCount: "200+",
            image: "https://api.builder.io/api/v1/image/assets/TEMP/2a2eea148bf0b6d9c60c79ba91972d707fc357a1",
            amenities: ["free wifi", "free breakfast", "room service"]
        }
    ];

    const filterOptions = {
        popular: ["Single Bed", "Family Suite", "Double Bed", "Luxury Room"],
        price: ["₹2500 to ₹5000", "₹5000 to ₹8000", "₹8000 to ₹15000"],
        sortBy: ["Price Low to High", "Price High to Low", "Newest First"]
    };

    const StarRating = ({ rating, reviewCount }) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <svg key={i} className="w-4 h-5" viewBox="0 0 16 19" fill="none">
                    <path d="M7.68323 1.81756C7.71245 1.74747 7.75758 1.68847 7.81353 1.64722C7.86949 1.60597 7.93404 1.58411 7.9999 1.58411C8.06576 1.58411 8.13031 1.60597 8.18626 1.64722C8.24222 1.68847 8.28735 1.74747 8.31656 1.81756L9.85656 5.52177C9.95788 5.7657 10.1076 5.97674 10.2928 6.13671C10.4781 6.29669 10.6933 6.40081 10.9199 6.44011L14.3639 7.03861C14.4292 7.04983 14.4905 7.08252 14.5409 7.13297C14.5913 7.18342 14.6289 7.24962 14.6492 7.32409C14.6696 7.39855 14.6721 7.4783 14.6563 7.55433C14.6405 7.63035 14.6071 7.69961 14.5599 7.75427L12.0692 10.6344C11.9048 10.8243 11.7818 11.0589 11.7109 11.318C11.6399 11.577 11.6231 11.8526 11.6619 12.1211L12.2499 16.1903C12.2614 16.2677 12.2544 16.3475 12.2296 16.4204C12.2048 16.4933 12.1632 16.5565 12.1096 16.6027C12.056 16.649 11.9926 16.6764 11.9265 16.6818C11.8604 16.6873 11.7944 16.6706 11.7359 16.6336L8.65723 14.7114C8.45441 14.5848 8.22871 14.5187 7.99956 14.5187C7.77042 14.5187 7.54472 14.5848 7.3419 14.7114L4.2639 16.6336C4.20545 16.6703 4.1395 16.6869 4.07353 16.6813C4.00757 16.6757 3.94424 16.6483 3.89076 16.6021C3.83728 16.5559 3.79579 16.4928 3.771 16.42C3.74622 16.3472 3.73914 16.2676 3.75056 16.1903L4.3379 12.1219C4.37681 11.8533 4.36006 11.5775 4.28909 11.3183C4.21812 11.0592 4.09506 10.8244 3.93056 10.6344L1.4399 7.75506C1.39229 7.70047 1.35856 7.63109 1.34254 7.55483C1.32652 7.47858 1.32886 7.39851 1.34928 7.32376C1.36971 7.249 1.40741 7.18256 1.45808 7.13201C1.50876 7.08146 1.57037 7.04882 1.6359 7.03781L5.07923 6.44011C5.30611 6.40105 5.52157 6.29704 5.70706 6.13705C5.89254 5.97707 6.04246 5.7659 6.1439 5.52177L7.68323 1.81756Z" fill="#F8701B" stroke="#F8701B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <svg key="half" className="w-4 h-5" viewBox="0 0 17 19" fill="none">
                    <path d="M8.16343 1.81756C8.19447 1.74747 8.24243 1.68847 8.30188 1.64722C8.36133 1.60597 8.42991 1.58411 8.49989 1.58411C8.56987 1.58411 8.63845 1.60597 8.6979 1.64722C8.75736 1.68847 8.80531 1.74747 8.83635 1.81756L10.4726 5.52177C10.5802 5.7657 10.7393 5.97674 10.9361 6.13671C11.1329 6.29669 11.3616 6.40081 11.6024 6.44011L15.2616 7.03861C15.331 7.04983 15.3961 7.08252 15.4497 7.13297C15.5033 7.18342 15.5432 7.24962 15.5648 7.32409C15.5865 7.39855 15.5891 7.4783 15.5723 7.55433C15.5555 7.63035 15.5201 7.69961 15.4699 7.75427L12.8236 10.6344C12.6489 10.8243 12.5182 11.0589 12.4428 11.318C12.3674 11.577 12.3495 11.8526 12.3908 12.1211L13.0155 16.1903C13.0278 16.2677 13.0203 16.3475 12.9939 16.4204C12.9676 16.4933 12.9234 16.5565 12.8664 16.6027C12.8095 16.649 12.7421 16.6764 12.6719 16.6818C12.6017 16.6873 12.5315 16.6706 12.4694 16.6336L9.19831 14.7114C8.98281 14.5848 8.743 14.5187 8.49954 14.5187C8.25608 14.5187 8.01626 14.5848 7.80077 14.7114L4.53039 16.6336C4.46829 16.6703 4.39821 16.6869 4.32813 16.6813C4.25804 16.6757 4.19076 16.6483 4.13393 16.6021C4.07711 16.5559 4.03302 16.4928 4.00669 16.42C3.98036 16.3472 3.97283 16.2676 3.98497 16.1903L4.60902 12.1219C4.65036 11.8533 4.63256 11.5775 4.55716 11.3183C4.48175 11.0592 4.35101 10.8244 4.17622 10.6344L1.52989 7.75506C1.47931 7.70047 1.44347 7.63109 1.42645 7.55483C1.40943 7.47858 1.41191 7.39851 1.43361 7.32376C1.45532 7.249 1.49537 7.18256 1.54921 7.13201C1.60305 7.08146 1.66851 7.04882 1.73814 7.03781L5.39668 6.44011C5.63774 6.40105 5.86667 6.29704 6.06375 6.13705C6.26082 5.97707 6.42011 5.7659 6.52789 5.52177L8.16343 1.81756Z" fill="white" stroke="#F8701B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            );
        }

        return (
            <div className="flex items-center gap-2">
                <div className="flex gap-1">
                    {stars}
                </div>
                <span className="text-sm text-black font-outfit">{reviewCount} reviews</span>
            </div>
        );
    };

    const HotelCard = ({ hotel }) => {
        return (
            <div className="flex gap-9 w-full mb-16">
                {/* Hotel Image */}
                <div className="relative">
                    <img 
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-[412px] h-[260px] object-cover rounded-2xl shadow-lg"
                    />
                </div>
                
                {/* Hotel Details */}
                <div className="flex flex-col justify-between flex-1">
                    <div>
                        {/* Location */}
                        <p className="text-sm text-[#838383] font-inter mb-2">{hotel.location}</p>
                        
                        {/* Hotel Name */}
                        <h3 className="text-[26px] text-[#343434] font-playfair mb-4">{hotel.name}</h3>
                        
                        {/* Rating */}
                        <StarRating rating={parseFloat(hotel.rating)} reviewCount={hotel.reviewCount} />
                        
                        {/* Full Location */}
                        <div className="flex items-center gap-2 mt-4 mb-6">
                            <svg className="w-3.5 h-4" viewBox="0 0 15 16" fill="none">
                                <path d="M11.8278 6.66732C11.8278 9.99598 8.55209 13.4627 7.45209 14.5333C7.34962 14.6202 7.22488 14.6672 7.09666 14.6672C6.96845 14.6672 6.84371 14.6202 6.74123 14.5333C5.64123 13.4627 2.36548 9.99598 2.36548 6.66732C2.36548 5.25283 2.86394 3.89628 3.75121 2.89608C4.63848 1.89589 5.84187 1.33398 7.09666 1.33398C8.35145 1.33398 9.55484 1.89589 10.4421 2.89608C11.3294 3.89628 11.8278 5.25283 11.8278 6.66732Z" stroke="#6B7280" strokeOpacity="0.89" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7.0967 8.66602C8.07656 8.66602 8.8709 7.77059 8.8709 6.66602C8.8709 5.56145 8.07656 4.66602 7.0967 4.66602C6.11684 4.66602 5.32251 5.56145 5.32251 6.66602C5.32251 7.77059 6.11684 8.66602 7.0967 8.66602Z" stroke="#6B7280" strokeOpacity="0.89" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-sm text-gray-500 font-outfit opacity-90">{hotel.fullLocation}</span>
                        </div>
                        
                        {/* Amenities */}
                        <div className="flex gap-3 mb-6">
                            {hotel.amenities.map((amenity, index) => (
                                <div key={index} className="flex items-center gap-2 bg-[#F0F0F7] rounded-lg px-4 py-2">
                                    {index === 0 && (
                                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                                            <path d="M15.9084 10.4917C15.7751 10.4917 15.6418 10.45 15.5251 10.3583C12.1668 7.76667 7.82511 7.76667 4.46677 10.3583C4.19177 10.5667 3.80011 10.5167 3.59177 10.25C3.38344 9.975 3.43344 9.58333 3.70011 9.375C7.52511 6.41667 12.4668 6.41667 16.2834 9.375C16.5584 9.58333 16.6084 9.975 16.3918 10.25C16.2834 10.4083 16.1001 10.4917 15.9084 10.4917Z" fill="#101010"/>
                                            <path d="M18.3333 7.59167C18.2 7.59167 18.0667 7.55 17.95 7.45833C13.1167 3.725 6.87501 3.725 2.05001 7.45833C1.77501 7.66667 1.38334 7.61667 1.17501 7.35C0.958339 7.08333 1.00834 6.68333 1.28334 6.475C6.57501 2.38333 13.4167 2.38333 18.7167 6.475C18.9917 6.68333 19.0417 7.075 18.825 7.35C18.7083 7.50833 18.5167 7.59167 18.3333 7.59167Z" fill="#101010"/>
                                            <path d="M14.3417 13.5333C14.2084 13.5333 14.0751 13.4917 13.9584 13.4C11.5584 11.5417 8.45006 11.5417 6.04172 13.4C5.76672 13.6083 5.37506 13.5583 5.16672 13.2917C4.95839 13.0167 5.00839 12.625 5.27506 12.4167C8.14172 10.2 11.8501 10.2 14.7167 12.4167C14.9917 12.625 15.0417 13.0167 14.8251 13.2917C14.7084 13.45 14.5251 13.5333 14.3417 13.5333Z" fill="#101010"/>
                                            <path d="M12.1666 16.5833C12.0332 16.5833 11.8999 16.5417 11.7832 16.45C10.6999 15.6083 9.29156 15.6083 8.20823 16.45C7.93323 16.6583 7.54156 16.6083 7.33323 16.3417C7.12489 16.0667 7.17489 15.675 7.44156 15.4667C8.99156 14.2667 10.9916 14.2667 12.5416 15.4667C12.8166 15.675 12.8666 16.0667 12.6499 16.3417C12.5416 16.4917 12.3582 16.5833 12.1666 16.5833Z" fill="#101010"/>
                                        </svg>
                                    )}
                                    {index === 1 && (
                                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                                            <path d="M14.8251 8.72501V14.825C14.8251 16.7667 13.2501 18.3333 11.3167 18.3333H5.17508C3.24175 18.3333 1.66675 16.7583 1.66675 14.825V8.72501C1.66675 6.78334 3.24175 5.21667 5.17508 5.21667H11.3167C13.2501 5.21667 14.8251 6.79167 14.8251 8.72501Z" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M4.58325 3.33333V1.875" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7.91675 3.33333V1.875" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M11.25 3.33333V1.875" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M18.3333 10.9667C18.3333 12.9 16.7583 14.475 14.825 14.475V7.45834C16.7583 7.45834 18.3333 9.02501 18.3333 10.9667Z" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M1.66675 10H14.5917" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    )}
                                    {index === 2 && (
                                        <svg className="w-5 h-4" viewBox="0 0 18 14" fill="none">
                                            <path d="M16.7143 12.6V11.2C16.7114 9.09491 15.9833 7.06761 14.6739 5.51883C13.3646 3.97006 11.5693 3.01252 9.64286 2.83549V1.4H11.5714V0H6.42857V1.4H8.35714V2.83549C6.43074 3.01252 4.63543 3.97006 3.32608 5.51883C2.01673 7.06761 1.28864 9.09491 1.28571 11.2V12.6H0V14H18V12.6H16.7143ZM9 4.2C10.4813 4.20212 11.9166 4.76027 13.064 5.78035C14.2114 6.80044 15.0007 8.22009 15.299 9.8H2.70096C2.99917 8.22006 3.78852 6.80039 4.93595 5.7803C6.08338 4.76021 7.51871 4.20208 9 4.2ZM2.57143 11.2H15.4286V12.6H2.57143V11.2Z" fill="black"/>
                                        </svg>
                                    )}
                                    <span className="text-xs text-black font-outfit">{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Price */}
                    <div>
                        <p className="text-xl font-semibold text-[#434343] font-inter">$ {hotel.price} /day</p>
                    </div>
                </div>
            </div>
        );
    };

    const FilterSection = ({ title, options, type }) => {
        return (
            <div className="mb-8">
                <h4 className="text-sm font-medium text-black mb-4 font-inter">{title}</h4>
                <div className="space-y-3">
                    {options.map((option, index) => (
                        <label key={index} className="flex items-center gap-3 cursor-pointer">
                            <div className="w-4 h-4 border border-[#A8A8A8] rounded-sm flex items-center justify-center">
                            </div>
                            <span className="text-sm text-black opacity-40 font-medium font-inter">{option}</span>
                        </label>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[#FDFDFD]">
            <Navbar />
            
            {/* Navigation Breadcrumb */}
            <div className="pt-8 pb-4 px-28">
                <div className="flex items-center gap-4 text-sm font-medium font-outfit">
                    <span className="text-[#776E6E]">Home</span>
                    <span className="text-[#776E6E]">Destination</span>
                    <span className="text-[#776E6E]">Experiences</span>
                    <span className="text-[#776E6E]">About</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="px-28 py-8">
                <div className="flex gap-12">
                    {/* Left Content - Hotel Listings */}
                    <div className="flex-1 max-w-[920px]">
                        {/* Header */}
                        <div className="mb-12">
                            <h1 className="text-[40px] font-playfair font-medium text-[#252525] leading-[57px] mb-4">Hotel Rooms</h1>
                            <p className="text-base text-gray-500 opacity-90 font-inter max-w-[579px]">
                                Take advantage of our limited-time offers and special packages to enhance 
                                your stay and create unforgettable memories.
                            </p>
                        </div>

                        {/* Hotels List */}
                        <div className="space-y-0">
                            {hotels.map((hotel, index) => (
                                <div key={hotel.id}>
                                    <HotelCard hotel={hotel} />
                                    {index < hotels.length - 1 && (
                                        <div className="w-full h-px bg-gray-300 opacity-30 mb-16"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Show More Button */}
                        <div className="flex justify-center mt-16">
                            <button className="bg-[#2563EB] text-white px-12 py-4 rounded text-base font-medium font-outfit hover:bg-blue-600 transition-colors">
                                Show More
                            </button>
                        </div>
                    </div>

                    {/* Right Sidebar - Filters */}
                    <div className="w-[287px] border border-[#D9D9D9] h-fit">
                        {/* Filter Header */}
                        <div className="px-6 py-4 border-b border-gray-300 opacity-30">
                            <div className="flex items-center justify-between">
                                <h3 className="text-base font-medium text-black uppercase font-inter">Filters</h3>
                                <button className="text-xs text-black opacity-40 uppercase font-medium font-inter">clear</button>
                            </div>
                        </div>

                        {/* Filter Content */}
                        <div className="p-6">
                            <FilterSection title="Popular filters" options={filterOptions.popular} type="popular" />
                            <FilterSection title="Price" options={filterOptions.price} type="price" />
                            <FilterSection title="Sort By" options={filterOptions.sortBy} type="sortBy" />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Rooms;
