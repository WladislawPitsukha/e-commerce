import WinterwearGucci1_1 from "@/assets/img/category/winter/winterwearGucci1_1.jpg";
import WinterwearGucci1_2 from "@/assets/img/category/winter/winterwearGucci1_2.jpg";
import WinterwearGucci1_3 from "@/assets/img/category/winter/winterwearGucci1_3.jpg";

import { ProductCardProps } from "@/types/typeProductCard";

export const winterwearProducts: ProductCardProps[] = [
    {
        id: 1,
        img: WinterwearGucci1_1,
        title: "Wool cardigan with pockets",
        price: {
            mainPrice: 89.99,
            option: true,
            procent: 10,
        },
        images: [
            WinterwearGucci1_1,
            WinterwearGucci1_2,
            WinterwearGucci1_3,
        ],
        description: "This wool cardigan is perfect for layering during the colder months. It features a classic design with pockets for added convenience.",
        details: {
            width: 500,
            height: 700,
            size: "S, M, L, XL",
            colors: ["Beige", "Gray", "Black"],
        },
        reviews: [
            {
                id: 1,
                grade: 4.5,
                text: {
                    username: "Sophia L.",
                    textCom: "The wool cardigan is a must-have for winter! It's warm, stylish, and the pockets are a great addition. Highly recommend!",
                },
            },
            {
                id: 2,
                grade: 5,
                text: {
                    username: "Liam J.",
                    textCom: "I love this cardigan! The quality is top-notch and it keeps me warm without being too bulky. Perfect for layering.",
                },
            },
            {
                id: 3,
                grade: 4,
                text: {
                    username: "Olivia K.",
                    textCom: "The design is classic and versatile. I can wear it with almost anything. Just wish it came in more colors!",
                },
            },
            {
                id: 4,
                grade: 1,
                text: {
                    username: "Noah R.",
                    textCom: "Disappointed with the fit. It runs small and the material feels cheap. Not worth the price.",
                },
            },
        ],
        faqs: [
            {
                id: 1,
                question: "Is the cardigan machine washable?",
                answer: "Yes, it is machine washable on a gentle cycle. We recommend air drying to maintain its shape.",
            },
            {
                id: 2,
                question: "What is the material of the cardigan?",
                answer: "The cardigan is made from 100% wool, providing warmth and comfort.",
            },
            {
                id: 3,
                question: "Does it have a lining?",
                answer: "No, the cardigan is unlined for a more casual look.",
            },
            {
                id: 4,
                question: "Can I wear it in the rain?",
                answer: "While it can withstand light rain, we recommend avoiding heavy downpours to maintain its quality.",
            },
        ]
    }
]