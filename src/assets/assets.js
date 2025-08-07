import logo from './logo.png'
import exclusiveOfferCardImg1 from './exclusiveOfferCardImg1.jpg';
import exclusiveOfferCardImg2 from './exclusiveOfferCardImg2.jpg';
import freeWiFiIcon from './freeWiFiIcon.jpg'
import freeBreakfastIcon from './freeBreakfastIcon.jpg'
import RoomServiceIcon from './RoomServiceIcon.jpg'
import mountainIcon from './mountainIcon.jpg'
import poolIcon from './poolIcon.jpg'
import homeIcon from './homeIcon.jpg'
import badgeIcon from './badgeIcon.jpg'
import locationFilledIcon from "./locationFilledIcon.jpg"
import heartIcon from "./heartIcon.jpg"
import searchIcon from './searchIcon.png';
import menuIcon from './menuIcon.png';
import hero_image from './hero-image.jpg';

export const assets={
    logo,
    freeWiFiIcon,
    freeBreakfastIcon,
    RoomServiceIcon,
    mountainIcon,
    poolIcon,
    homeIcon,
    badgeIcon,
    locationFilledIcon,
    heartIcon,
    searchIcon,
    menuIcon,
    hero_image,

};

export const cities=[
    "Dubai",
    "Singapore",
    "New York",
    "London"
];

export const exclusiveOffers=[
    // {_id:1,title:"Summer excape Package",description:"Enjoy a complimentary night and daily breakfast",priceOff:25, expiryDate:"Aug 31",image:exclusiveOfferCardImg1},
    {_id:2,title:"Romantic Getaway",description:"Special couples package including spa treatment",priceOff:20,expiryDate:"Sep 20",image:exclusiveOfferCardImg2},
    // {_id:3,title:"Family Fun Package",description:"Complimentary tickets to theme park",priceOff:30,expiryDate:"Sep 25",image:exclusiveOfferCardImg3}
]

export const testimonials=[
    {id:1,name:"Emma Rodriguez",address:"Barcelona, Spain",image:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",rating:5,review:"I've used many booking platforms before , but none compare to the personalized experience and attention to detail that QuickStay provides. Their curated selection of hotels is unmatched."},
    {id:2,name:"John Smith",address:"New York, USA",image:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",rating:4, review:"QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended! "},
    {id:3,name:"Maria Rodriguez",address:"Madrid, Spain",image:"https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200",rating:5,review:"Amazing service! I always find the best Luxury accommodations through Quickstay. Their recommendations never disappoint!"}

];

export const facilityIcons={
    "Free WiFi":assets.freeWiFiIcon,
    "Free Breakfast":assets.freeBreakfastIcon,
    "Room Service":assets.RoomServiceIcon,
    "Mountain view":assets.mountainIcon,
    "Pool Access":assets.poolIcon,
}

export const roomCommenData=[
    {icon:assets.homeIcon,title:"clean & Safe Stay",description:"A well maintained amd hygenic space just for you."},
    {icon:assets.badgeIcon,title:"Enhanced Cleaning",description:"This host follows Staybnb's strict cleaning standards."},
    {icon:assets.locationFilledIcon,title:"Excellent Location",description:"90% of guests rated the location 5 stars."},
    {icon:assets.heartIcon,title:"Smooth Check-In",description:"100% of guests gave Check-In a 5 star rating."},
]

export const hotelDummyData={
    "_id":"618yeiudgf38538256",
    "name":"Urbanza Suites",
    "address":"Dubai, UAE",
    "Owner":"user_758235hkrty94579364p",
    "city":"New York",
    "createdAt":"2025-04-10T06:22:11.663z",
    "updatedAt":"2025-04-10T06:22:11.663z",
    "__v":0
}

export const roomsDummyData=[
    {
        "_id":"618yeiudgf38538256",
        "hotel": hotelDummyData,
        "roomType":"Double Bed",
        "pricePerNight":399,
        "amenities":["Room service", "Mountain View","Pool Access"],
        //"images":[RoomImg2,RoomImg3,RoomImg4],
        "isavailable":true,
        "createdAt":"2025-04-10T06:22:11.663z",
        "updatedAt":"2025-04-10T06:22:11.663z",
        "__v":0
    },
    {
        "_id":"618yeiudgf38538257",
        "hotel": hotelDummyData,
        "roomType":"Single Bed",
        "pricePerNight":299,
        "amenities":["Free WiFi", "Free Breakfast"],
       // "images":[RoomImg1, RoomImg2],
        "isavailable":true,
        "createdAt":"2025-04-10T06:22:11.663z",
        "updatedAt":"2025-04-10T06:22:11.663z",
        "__v":0


    },
    {
        "_id":"618yeiudgf38538258",
        "hotel": hotelDummyData,
        "roomType":"Triple Bed",
        "pricePerNight":499,
        "amenities":["Room service", "Mountain View","Pool Access"],
        //"images":[RoomImg1, RoomImg2,RoomImg3,RoomImg4],
        "isavailable":false,
        "createdAt":"2025-04-10T06:22:11.663z",
        "updatedAt":"2025-04-10T06:22:11.663z",
        "__v":0

    }
]

export const userDummyData={
    "_id":"user_2ehrr7796vf6s968hp",
    "username":"Kashish Arora",
    "email":"kashishbeai@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJN2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role":"hotelOwner",
    "createdAt":"2025-04-10T06:22:11.663z",
    "updatedAt":"2025-04-10-06:22:11.663z",
    "__v":1,
    "recentSearchedCities":[
        "New York"
    ]
}


export const userBookingsDummyData=[
    {
        "_id":"user_2ehrr7796vf6s968hp",
        "user":userDummyData,
        "room":userDummyData[1],
        "hotel":hotelDummyData,
        "checkInDate":"2025-04-30T00:00:00:000z",
        "checkOutDate":"2025-05-02T00:00:00:000",
        "totalPrice":299,
        "guests":1,
        "status":"pending",
        "paymentMethod":"Stripe",
        "isPaid":"true",
        "createdAt":"2025-04-10T06:22:11.663z",
        "updatedAt":"2025-04-10T06:22:11.663z",
        "__v":0
    },
    {
        "_id":"user_2ehrr7796vf6s967hp",
        "user":userDummyData,
        "room":userDummyData[2],
        "hotel":hotelDummyData,
        "checkInDate":"2025-04-30T00:00:00:000z",
        "checkOutDate":"2025-05-02T00:00:00:000",
        "totalPrice":399,
        "guests":1,
        "status":"pending",
        "paymentMethod":"Stripe",
        "isPaid":"true",
        "createdAt":"2025-04-10T06:22:11.663z",
        "updatedAt":"2025-04-10T06:22:11.663z",
        "__v":0

    },
    {
        "_id":"user_2ehrr7796vf6s976hp",
        "user":userDummyData,
        "room":userDummyData[3],
        "hotel":hotelDummyData,
        "checkInDate":"2025-04-30T00:00:00:000z",
        "checkOutDate":"2025-05-02T00:00:00:000",
        "totalPrice":499,
        "guests":1,
        "status":"pending",
        "paymentMethod":"Stripe",
        "isPaid":"true",
        "createdAt":"2025-04-10T06:22:11.663z",
        "updatedAt":"2025-04-10T06:22:11.663z",
        "__v":0
    }

]