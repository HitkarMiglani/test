import React from 'react';

const HotelCard = ({ hotel, showBadge = false, badgeText = "Best Seller" }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Badge */}
      {showBadge && (
        <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 z-10">
          <span className="text-gray-800 text-xs font-medium">{badgeText}</span>
        </div>
      )}
      
      {/* Hotel Image */}
      <div className="relative">
        <img 
          src={hotel.image} 
          alt={hotel.name}
          className="w-full h-48 object-cover"
        />
      </div>
      
      {/* Hotel Info */}
      <div className="p-3">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-playfair font-medium text-gray-900 truncate">{hotel.name}</h3>
          <div className="flex items-center gap-1 ml-2">
            <svg className="w-3.5 h-3.5 fill-orange-500" viewBox="0 0 15 17">
              <path d="M7.36435 1.67902C7.39027 1.61999 7.43031 1.57031 7.47994 1.53557C7.52958 1.50083 7.58684 1.48242 7.64527 1.48242C7.70369 1.48242 7.76096 1.50083 7.81059 1.53557C7.86023 1.57031 7.90027 1.61999 7.92618 1.67902L9.29231 4.79835C9.38219 5.00377 9.515 5.18148 9.67932 5.3162C9.84364 5.45091 10.0345 5.53859 10.2356 5.57168L13.2908 6.07568C13.3486 6.08514 13.403 6.11267 13.4478 6.15515C13.4925 6.19764 13.5258 6.25338 13.5439 6.31609C13.562 6.37879 13.5641 6.44596 13.5501 6.50998C13.5361 6.574 13.5065 6.63232 13.4646 6.67835L11.2552 9.10368C11.1093 9.26365 11.0002 9.46123 10.9373 9.67936C10.8743 9.89748 10.8594 10.1296 10.8938 10.3557L11.4154 13.7824C11.4256 13.8476 11.4194 13.9147 11.3974 13.9761C11.3754 14.0376 11.3385 14.0908 11.291 14.1297C11.2434 14.1686 11.1871 14.1917 11.1285 14.1963C11.0699 14.2009 11.0113 14.1868 10.9595 14.1557L8.22839 12.537C8.04846 12.4304 7.84824 12.3747 7.64497 12.3747C7.4417 12.3747 7.24148 12.4304 7.06156 12.537L4.33107 14.1557C4.27923 14.1866 4.22072 14.2005 4.1622 14.1959C4.10368 14.1912 4.04751 14.1681 4.00007 14.1292C3.95262 14.0903 3.91581 14.0371 3.89383 13.9758C3.87184 13.9145 3.86556 13.8475 3.8757 13.7824L4.39672 10.3564C4.43124 10.1302 4.41638 9.89792 4.35342 9.67966C4.29046 9.46141 4.1813 9.26372 4.03538 9.10368L1.82591 6.67902C1.78368 6.63304 1.75376 6.57462 1.73955 6.5104C1.72533 6.44619 1.72741 6.37876 1.74553 6.31581C1.76365 6.25286 1.79709 6.19691 1.84204 6.15434C1.887 6.11177 1.94165 6.08428 1.99978 6.07502L5.05435 5.57168C5.25561 5.53879 5.44676 5.45121 5.61129 5.31648C5.77583 5.18176 5.90883 5.00393 5.99882 4.79835L7.36435 1.67902Z" 
                    fill="#F8701B" stroke="#F8701B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm text-gray-900">{hotel.rating}</span>
          </div>
        </div>
        
        {/* Location */}
        <div className="flex items-center gap-1 mb-4">
          <svg className="w-3.5 h-3.5 stroke-gray-500" viewBox="0 0 15 17" fill="none">
            <path d="M12.247 6.81575C12.247 10.1444 8.97128 13.6111 7.87128 14.6818C7.76881 14.7686 7.64406 14.8156 7.51585 14.8156C7.38764 14.8156 7.2629 14.7686 7.16042 14.6818C6.06042 13.6111 2.78467 10.1444 2.78467 6.81575C2.78467 5.40127 3.28313 4.04471 4.1704 3.04452C5.05767 2.04433 6.26106 1.48242 7.51585 1.48242C8.77064 1.48242 9.97403 2.04433 10.8613 3.04452C11.7486 4.04471 12.247 5.40127 12.247 6.81575Z" 
                  stroke="#6B7280" strokeOpacity="0.89" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.51589 8.81445C8.49575 8.81445 9.29009 7.91902 9.29009 6.81445C9.29009 5.70988 8.49575 4.81445 7.51589 4.81445C6.53603 4.81445 5.7417 5.70988 5.7417 6.81445C5.7417 7.91902 6.53603 8.81445 7.51589 8.81445Z" 
                  stroke="#6B7280" strokeOpacity="0.89" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm text-gray-600">{hotel.location}</span>
        </div>
        
        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-medium text-gray-900">${hotel.price}</span>
            <span className="text-sm text-gray-500">/ night</span>
          </div>
          <button className="border border-gray-300 text-gray-900 px-3 py-2 rounded text-sm hover:bg-gray-50 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
