import { ClotheObjProps } from "@/types/typeClotheCard";

export function importImages(category: string, id: number):any[] {
    const images: any[] = [];

    for(let i = 1; i <= id; i++) {
        const image = require(`@/assets/img/${category}/${category}${id}.png`);
        images.push(image);
    }

    return images;
}

export function createClotheCards(category: string, objs: ClotheObjProps[]): ClotheObjProps[] {
    const images = importImages(category, objs.length);

    return objs.map((items, index) => ({
        ...items,
        img: images[index]
    }))
}