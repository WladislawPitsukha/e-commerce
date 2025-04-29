import OfficewearCalvin1_1 from "@/assets/img/category/office/officewearCalvin1_.jpg"
import OfficewearCalvin1_2 from "@/assets/img/category/office/officewearCalvin1_2.jpg"
import OfficewearCalvin1_3 from "@/assets/img/category/office/officewearCalvin1_3.jpg"

import OfficewearZara1_1 from "@/assets/img/category/office/officewearZara1_1.jpg"
import OfficewearZara1_2 from "@/assets/img/category/office/officewearZara1_2.jpg"
import OfficewearZara1_3 from "@/assets/img/category/office/officewearZara1_3.jpg"

import { ProductCardProps } from "@/types/typeProductCard";

export const officewearProducts: ProductCardProps[] = [
    {
        id: 1,
        img: OfficewearCalvin1_1,
        title: 'Black Shirt Calvin Klein',
        price: {
            mainPrice: 89.99,
            option: true,
            procent: 10,
        },
        images: [
            OfficewearCalvin1_1,
            OfficewearCalvin1_2,
            OfficewearCalvin1_3,
        ],
        description: 'This black shirt from Calvin Klein is a timeless piece that can be dressed up or down. Made from high-quality cotton, it offers both comfort and style.',
        details: {
            width: 500,
            height: 700,
            size: 'S, M, L, XL',
            colors: ['Black', 'White', 'Blue']
        },
        reviews: [
            {
                id: 1,
                grade: 4.5,
                text: {
                    username: "Sarah M.",
                    textCom: "The black shirt from Calvin Klein is a must-have! The fabric is soft and breathable, making it perfect for all-day wear. I love how versatile it is - I can dress it up for work or keep it casual for weekends.",
                },
            },
            {
                id: 2,
                grade: 5,
                text: {
                    username: "Alex K.",
                    textCom: "Just got my black shirt and I'm impressed! The fit is perfect and the quality is top-notch. It's become my go-to shirt for both work and casual outings.",
                },
            },
            {
                id: 3,
                grade: 4,
                text: {
                    username: "James L.",
                    textCom: "The black shirt is exactly what I was looking for. The material feels premium and the design is sleek. Great value for the price.",
                },
            },
        ],
        faqs: [
            {
                id: 1,
                question: "What is the fabric composition of the shirt?",
                answer: "The shirt is made from 100% high-quality cotton, ensuring comfort and breathability.",
            },
            {
                id: 2,
                question: "Is the shirt machine washable?",
                answer: "Yes, the shirt is machine washable. We recommend washing it in cold water and hanging it to dry for best results.",
            },
            {
                id: 3,
                question: "Does the shirt come in different colors?",
                answer: "Yes, the shirt is available in black, white, and blue. You can choose your preferred color at checkout.",
            },
            {
                id: 4,
                question: "What sizes are available for this shirt?",
                answer: "The shirt is available in sizes S, M, L, and XL. Please refer to our size chart for more details.",
            },
        ]
    },
    {
        id: 2,
        img: OfficewearZara1_1,
        title: 'Black T-shirt Zara',
        price: {
            mainPrice: 39.99,
            option: false,
            procent: 0,
        },
        images: [
            OfficewearZara1_1,
            OfficewearZara1_2,
            OfficewearZara1_3,
        ],
        description: 'This black t-shirt from Zara is a versatile wardrobe staple. Made from soft cotton, it features a classic fit and can be paired with almost anything.',
        details: {
            width: 500,
            height: 700,
            size: 'S, M, L, XL',
            colors: ['Black', 'White', 'Gray']
        },
        reviews: [
            {
                id: 1,
                grade: 4.5,
                text: {
                    username: "Sarah M.",
                    textCom: "The black t-shirt from Zara is a wardrobe essential! The fabric is soft and breathable, making it perfect for all-day wear. I love how versatile it is - I can dress it up for work or keep it casual for weekends.",
                },
            },
            {
                id: 2,
                grade: 5,
                text: {
                    username: "Alex K.",
                    textCom: "Just got my black t-shirt and I'm impressed! The fit is perfect and the quality is top-notch. It's become my go-to shirt for both work and casual outings.",
                },
            },
            {
                id: 3,
                grade: 4,
                text: {
                    username: "James L.",
                    textCom: "The black t-shirt is exactly what I was looking for. The material feels premium and the design is sleek. Great value for the price.",
                },
            },
        ],
        faqs: [
            {
                id: 1,
                question: "What is the fabric composition of the t-shirt?",
                answer: "The t-shirt is made from 100% high-quality cotton, ensuring comfort and breathability.",
            },
            {
                id: 2,
                question: "Is the t-shirt machine washable?",
                answer: "Yes, the t-shirt is machine washable. We recommend washing it in cold water and hanging it to dry for best results.",
            },
            {
                id: 3,
                question: "Does the t-shirt come in different colors?",
                answer: "Yes, the t-shirt is available in black, white, and gray. You can choose your preferred color at checkout.",
            },
            {
                id: 4,
                question: "What sizes are available for this t-shirt?",
                answer: "The t-shirt is available in sizes S, M, L, and XL. Please refer to our size chart for more details.",
            },
        ],
    },
]