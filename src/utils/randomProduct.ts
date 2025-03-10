import { TshirtsObjs, ShirtsObjs, ShortsObj, JeansObjs, ClotheObjProps } from "@/types/typeClotheCard";

const products: any[] = [TshirtsObjs, ShirtsObjs, ShortsObj, JeansObjs];

export async function RandomProductArrivals(): Promise<ClotheObjProps> {
    const randomArrayId = Math.floor(Math.random() * products.length);
    let selectedArray = null;

    for(let i = 0; i < products.length; i++) {
        if(i === randomArrayId) {
            selectedArray = products[i];
            break;
        }
    }

    const randomObjectIndex = Math.floor(Math.random() * selectedArray.length);
    let selectedProduct = null;

    for(let i = 0; i < selectedArray.length; i++) {
        if(i === randomObjectIndex) {
            selectedProduct = selectedArray[i];
            break;
        }
    }

    return selectedProduct;
}