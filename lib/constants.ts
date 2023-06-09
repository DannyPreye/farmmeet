import
{
    inactiveShop,
    activeDiscover,
    inactiveDiscover,
    activeMessages,
    inactiveMessages,
    inactiveProducts,
    inactiveNotifications,
    inactiveMeet,
    inactiveProfile
} from "@/public/shared";
import { Post } from "./types";


export const dashboardMenus = [
    {
        name: 'Discover',
        activeIcon: activeDiscover,
        inactiveIcon: inactiveDiscover,
        image: true,
        link: '/dashboard/discover'
    },
    {
        name: "Messages",
        activeIcon: activeMessages,
        inactiveIcon: inactiveMessages,
        image: true,
        link: '/dashboard/messages'

    },
    {
        name: "Products",
        activeIcon: '/shared/products_active.png',
        inactiveIcon: inactiveProducts,
        image: true,
        link: '/dashboard/products'

    },
    {
        name: "Shops",
        activeIcon: '/shared/shops_active.png',
        inactiveIcon: inactiveShop,
        image: true,
        link: '/dashboard/shops'
    },
    {
        name: "Notifications",
        activeIcon: '/shared/notifications_active.png',
        inactiveIcon: inactiveNotifications,
        image: true,
        link: '/dashboard/notifications'
    },
    {
        name: "Meet Friends",
        activeIcon: '/shared/meet_active.png',
        inactiveIcon: inactiveMeet,
        image: true,
        link: '/dashboard/meet'

    },
    {
        name: "Profile",
        activeIcon: '/shared/profile_active.png',
        inactiveIcon: inactiveProfile,
        image: true,
        link: '/dashboard/profile'
    }

];


export const dummyPosts: Post[] = [ {
    "user": {
        firstName: "Jane",
        lastName: "Doe",
        "profilePicture": "https://dummyimage.com/100x100/000/fff",
    },
    "content": "Just finished an amazing hike in the mountains. The views were breathtaking and the fresh air was invigorating!",
    "media": [ "https://dummyimage.com/500x500/111/fff" ],

    "likes": 25,
    comments: [
        {
            username: "John Smith",
            comment: "Looks like an incredible hike! I'll have to check it out sometime."
        },
        {
            username: "Sara Jones",
            comment: "Wow, those photos are stunning! I wish I could have been there with you."
        }
    ]
},
{
    user: {
        firstName: "John",
        lastName: "Smith",
        "profilePicture": "https://dummyimage.com/100x100/000/fff",
    },
    "content": "Just finished an amazing hike in the mountains. The views were breathtaking and the fresh air was invigorating!", "media": [ "https://dummyimage.com/500x500/000/fff", "https://dummyimage.com/500x500/111/fff" ],
    "comments": [
        {
            "username": "John Smith",
            "comment": "Looks like an incredible hike! I'll have to check it out sometime."
        }
    ],
    "likes": 25
},
{
    "user": {
        firstName: "Jane",
        lastName: "Doe",
        "profilePicture": "https://dummyimage.com/100x100/000/fff",
    },
    "content": "Just finished an amazing hike in the mountains. The views were breathtaking and the fresh air was invigorating!",
    "media": [
        "https://dummyimage.com/500x500/000/fff",
        "https://dummyimage.com/400x400/111/fff",
        "https://dummyimage.com/600x600/111/fff",
        "https://dummyimage.com/700x700/111/fff",
        "https://dummyimage.com/800x800/111/fff",
        "https://dummyimage.com/500x500/111/fff",
    ],
    "comments": [
        {
            "username": "John Smith",
            "comment": "Looks like an incredible hike! I'll have to check it out sometime."
        }
    ],
    "likes": 25

}

];

export const dummyFriendSuggestion = [
    {
        name: "green_thumbs",
        profilePicture: "https://dummyimage.com/100x100/4caf50/ffffff",
        accountType: "farmer"
    },
    {
        name: "foodie4life",
        profilePicture: "https://dummyimage.com/100x100/ff9800/ffffff",
        accountType: "buyer"
    },
    {
        name: "organicfan",
        profilePicture: "https://dummyimage.com/100x100/9c27b0/ffffff",
        accountType: "buyer"
    },
    {
        name: "harvest_king",
        profilePicture: "https://dummyimage.com/100x100/f44336/ffffff",
        accountType: "farmer"
    },
    {
        name: "market_maven",
        profilePicture: "https://dummyimage.com/100x100/2196f3/ffffff",
        accountType: "seller"
    },
    {
        name: "veggie_vibes",
        profilePicture: "https://dummyimage.com/100x100/009688/ffffff",
        accountType: "buyer"
    },
    {
        name: "fresh_farms",
        profilePicture: "https://dummyimage.com/100x100/8bc34a/ffffff",
        accountType: "seller"
    },
    {
        name: "healthy_harvest",
        profilePicture: "https://dummyimage.com/100x100/ffeb3b/000000",
        accountType: "farmer"
    },
];