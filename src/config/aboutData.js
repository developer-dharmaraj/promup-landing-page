import { Globe, User, RefreshCw } from "lucide-react"

export const aboutData = {
    tag: "about us",
    title: "Your Global Real Estate Partner.",
    description:
        "PromUp is your gateway to a world of real estate opportunities. With a global network of trusted partners we're dedicated to connecting buyers and sellers across borders.",

    features: [
        {
            id: 1,
            icon: Globe,
            title: "Global Reach",
            description: "Access properties in diverse markets worldwide.",
            bg: "bg-gray-200",
            text: "text-black",
        },
        {
            id: 2,
            icon: User,
            title: "Personalized Service",
            description: "Get solutions for your unique needs.",
            bg: "bg-gray-200",
            text: "text-black",
        },
        {
            id: 3,
            icon: RefreshCw,
            title: "Transparent Processes",
            description: "Stay informed throughout the entire process.",
            bg: "bg-black",
            text: "text-white",
        },
    ],
}
