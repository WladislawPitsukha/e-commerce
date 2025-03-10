"use client"

import { useEffect, useState } from 'react';
import { getUniqueProducts } from "@/utils/getUniqueProducts";
import ClothesCard from "@/components/clothesCard";
import { ClotheObjProps } from '@/types/typeClotheCard';

export default function NewArrivals() {
    const [products, setProducts] = useState<ClotheObjProps[]>([]);

    useEffect(() => {
        async function fetchProducts() {
        const uniqueProducts = await getUniqueProducts();
        setProducts(uniqueProducts);
        }
        fetchProducts();
    }, []);

    return (
        <div className="flex justify-between items-center">
            {products.map(product => (
                <ClothesCard {...product} />
            ))}
        </div>
    );
}