import { BrandsProps } from "../types/typeBrands";
import { arrCountryData } from "../zara/constants/arrCountryZara";
import { arrGrowthZara } from "../zara/constants/arrGrowthZara";
import { arrPartnerLinks } from "../zara/constants/arrParterLinks";
import { arrProductPhotos } from "../zara/constants/arrProductsZara";
import { arrSalesZara } from "../zara/constants/arrSalesZara"; 

export const arrBrands: BrandsProps[] = [
    {
        brand: {
            id: 1,
            name: "Zara",
            links: {
                mainLink: "/brands/zara",
                webpageLink: "https://www.zara.com"
            },
        },
        description: {
            story: [
                "Zara had always dreamed of becoming a fashion designer, but growing up in a small town, she had little more than her imagination and determination. When a local design contest was announced, she saw her chance. With no fancy fabrics, she collected scraps, sewing them together with creativity and heart.",
                "On the big day, her dress stood out—not for its luxury, but for the story it told. The judges were captivated, and Zara won. More than just a prize, the victory opened doors to a prestigious fashion school, turning her dreams into reality.",
                "On the big day, her dress stood out—not for its luxury, but for the emotion woven into every thread. The judges were captivated by the originality and soul in her design. As they announced her name as the winner, tears filled Zara’s eyes. It was more than just a victory—it was validation that her dreams were possible.",
            ],
            photos: arrProductPhotos,
        },
        business: {
            countryData: arrCountryData,
            grouthData: arrGrowthZara,
            salesData: arrSalesZara,
        },
        partners: arrPartnerLinks,
        comprasions: [],
    },
    /*
    {
        brand: {
            id: 2,
            name: "Calvin Klein",
            links: {
                mainLink: "/brands/calvinklein",
                webpageLink: "https://www.calvinklein.com"
            }
        }
    },
    {
        brand: {
            id: 3,
            name: "Gucci",
            links: {
                mainLink: "/brands/gucci",
                webpageLink: "https://www.gucci.com"
            }
        }
    },
    {
        brand: {
            id: 4,
            name: "Dolce & Gabbana",
            links: {
                mainLink: "/brands/dolcegabbana",
                webpageLink: "https://www.dolcegabbana.com"
            }
        }
    },
    {
        brand: {
            id: 5,
            name: "Versace",
            links: {
                mainLink: "/brands/versace",
                webpageLink: "https://www.versace.com"
            }
        }
    }
    */
];