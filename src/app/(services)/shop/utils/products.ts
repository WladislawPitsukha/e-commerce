import { ProductCardProps } from "@/types/typeProductCard";
import { casualwearProducts } from "../[category]/casual/arrDataProducts";
import { officewearProducts } from "../[category]/office/arrDataProducts";
import { partywearProducts } from "../[category]/party/arrDataProducts";
import { summerwearProducts } from "../[category]/summer/arrDataProducts";
import { winterwearProducts } from "../[category]/winter/arrDataProducts";
import { activewearProducts } from "../[category]/active/arrDataProducts";

export const allProducts: ProductCardProps[] = [
    ...activewearProducts,
    ...casualwearProducts,
    ...officewearProducts,
    ...partywearProducts,
    ...summerwearProducts,
    ...winterwearProducts
];

export const getProductsByCategory = (category: string): ProductCardProps[] => {
    switch (category.toLowerCase()) {
        case 'activewear':
        return activewearProducts;
        case 'casualwear':
        return casualwearProducts;
        case 'officewear':
        return officewearProducts;
        case 'partywear':
        return partywearProducts;
        case 'summerwear':
        return summerwearProducts;
        case 'winterwear':
        return winterwearProducts;
        default:
        return allProducts;
    }
};