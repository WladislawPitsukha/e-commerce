import { RandomProductArrivals } from "./randomProduct";
import { ClotheObjProps } from "@/types/typeClotheCard";

export async function getUniqueProducts() {
    let productArrivals: ClotheObjProps[] = [];
    const uniqueIds = new Set<number>();
    const uniqueArrays = new Set<string>();

    while(productArrivals.length < 4) {
        const newProduct = await RandomProductArrivals();
        const arrayKey = `${newProduct.id}-${JSON.stringify(newProduct)}`;

        if(!uniqueIds.has(newProduct.id) && !uniqueArrays.has(arrayKey)) {
            uniqueIds.add(newProduct.id);
            uniqueArrays.add(arrayKey);
            productArrivals.push(newProduct);
        }
    }

    return productArrivals;
}