import React from 'react';

const OfferCard = ({ offer }) => {
  return (
    <div className="relative rounded-xl overflow-hidden group cursor-pointer">
      {/* Background Image */}
      <img 
        src={offer.image} 
        alt={offer.title}
        className="w-full h-56 object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
      
      {/* Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-between">
        {/* Discount Badge */}
        <div className="self-start">
          <div className="bg-white rounded-full px-3 py-1">
            <span className="text-gray-800 text-xs font-medium">{offer.priceOff}% OFF</span>
          </div>
        </div>
        
        {/* Bottom Content */}
        <div className="text-white">
          <h3 className="text-xl font-playfair font-medium mb-2">{offer.title}</h3>
          <p className="text-white/90 text-sm mb-2">{offer.description}</p>
          <p className="text-white/70 text-xs mb-4">Expires {offer.expiryDate}</p>
          
          {/* View Offers Link */}
          <div className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
            <span className="text-sm font-medium">View Offers</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
