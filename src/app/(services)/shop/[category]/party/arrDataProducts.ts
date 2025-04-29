import PartystyleCalvinklein1_1 from "@/assets/img/category/party/partywearCalvinKlein1_1.jpg";
import PartystyleCalvinklein1_2 from "@/assets/img/category/party/partywearCalvinKlein1_2.jpg";
import PartystyleCalvinklein1_3 from "@/assets/img/category/party/partywearCalvinKlein1_3.jpg";

import { ProductCardProps } from "@/types/typeProductCard";

export const partywearProducts: ProductCardProps[] = [
    {
        id: 1,
        img: PartystyleCalvinklein1_1,
        title: 'Party Dress',
        price: {
            mainPrice: 79.99,
            option: true,
            procent: 15,
        },
        images: [
            PartystyleCalvinklein1_1,
            PartystyleCalvinklein1_2,
            PartystyleCalvinklein1_3,
        ],
        description: 'This party dress is perfect for any occasion. Made from high-quality fabric, it features a stylish design that will make you stand out.',
        details: {
            width: 500,
            height: 700,
            size: 'S, M, L, XL',
            colors: ['Black', 'Red', 'Blue']
        },
        reviews: [
            {
                id: 1,
                grade: 4.5,
                text: {
                    username: "Sophia W.",
                    textCom: "The party dress I bought from Shop.co is stunning! The fit is perfect and the fabric feels luxurious. I've received so many compliments on it!",
                },
            },
            {
                id: 2,
                grade: 5,
                text: {
                    username: "Liam H.",
                    textCom: "I was skeptical about ordering a dress online, but this one exceeded my expectations. The color is vibrant and the quality is top-notch. Highly recommend!",
                },
            },
            {
                id: 3,
                grade: 4,
                text: {
                    username: "Olivia J.",
                    textCom: "The design of this dress is beautiful, but I found the sizing to be a bit off. I had to exchange it for a larger size, but overall I'm happy with my purchase.",
                },
            },
            {
                id: 4,
                grade: 1,
                text: {
                    username: "Noah T.",
                    textCom: "I was really disappointed with the quality of this dress. It looked great in the pictures, but when I received it, the fabric felt cheap and the stitching was coming undone.",
                },
            },
        ],
        faqs:[
            {
                id: 1,
                question:"What sizes are available for this dress?",
                answer:"The dress is available in sizes S, M, L, and XL."
            },
            {
                id: 2,
                question:"Is the dress machine washable?",
                answer:"Yes, the dress is machine washable. We recommend washing it on a gentle cycle and hanging it to dry."
            },
            {
                id: 3,
                question:"What is the return policy for this dress?",
                answer:"We offer a 30-day return policy for unworn and unwashed items. Please refer to our return policy page for more details."
            },
            {
                id: 4,
                question:"Can I get this dress in a different color?",
                answer:"Currently, the dress is available in Black, Red, and Blue. We may introduce more colors in the future."
            },
            {
                id: 5,
                question:"Is the dress lined?",
                answer:"Yes, the dress is fully lined for added comfort and quality."
            },
            {
                id: 6,
                question:"How long will it take to ship?",
                answer:"Shipping times vary based on your location. Typically, orders are processed within 1-3 business days and shipping takes an additional 3-7 business days."
            },
        ],
    },
]