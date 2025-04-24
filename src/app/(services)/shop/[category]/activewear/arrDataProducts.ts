import { ProductCardProps } from "@/types/typeProductCard";
// TODO: add more obj to arrDataProducts
export const ActivewearProducts: ProductCardProps[] = [
    {
        id: 1,
        img: require('@/assets/images/products/activewear/activewear1.png'),
        title: 'Activewear Set',
        price: {
            mainPrice: 49.99,
            option: true,
            procent: 10
        },
        images: [
            require('@/assets/images/products/activewear/activewear1.png'),
            require('@/assets/images/products/activewear/activewear2.png'),
            require('@/assets/images/products/activewear/activewear3.png')
        ],
        description: 'This activewear set is perfect for your workout sessions. Made from breathable fabric, it keeps you comfortable and stylish.',
        details: {
            width: 500,
            height: 700,
            size: 'S, M, L, XL',
            colors: ['Black', 'Blue', 'Red']
        },
        reviews: [
            {
                id: 1,
                grade: 4.5,
                text: {
                    username: "Sarah M.",
                    textCom: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
                }
            },
            {
                id: 2,
                grade: 5,
                text: {
                    username: "Alex K.",
                    textCom: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
                }
            },
            {
                id: 3,
                grade: 4,
                text: {
                    username: "James L.",
                    textCom: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection is diverse and on-trend."
                }
            },
        ],
        faqs: [
            {
                question: 'What is the material of this activewear?',
                answer: 'The activewear is made from a blend of polyester and spandex.'
            },
            {
                question: 'Is this set suitable for running?',
                answer: 'Yes, it is designed for high-intensity workouts including running.'
            }
        ]
    }
]