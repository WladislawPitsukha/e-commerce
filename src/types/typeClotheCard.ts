import { createClotheCards } from '@/utils/importImages';

export type ClotheObjProps = {
    id: number;
    title: string;
    price: number;
    option?: number;
}

export type ClotheCard = ClotheObjProps & {
    img: any;
}

export const TshirtsObjs: ClotheObjProps[] = [
    {
        id: 1,
        title: "T-shirt with Tape Details",
        price: 120,
    },
    {
        id: 2,
        title: "Sleeve Striped T-shirt",
        price: 160,
        option: 30,
    },
    {
        id: 3,
        title: "Courage Graphic T-shirt",
        price: 145,
    }
]

export const ShirtObjs: ClotheObjProps[] = [
    {
        id: 4,
        title: "Checkered Shirt",
        price: 180,
    },
    {
        id: 5,
        title: "Vertical Striped Shirt",
        price: 232,
        option: 30,
    }
]

export const JeansObjs: ClotheObjProps[] = [
    {
        id: 6,
        title: "Skinny Fit Jeans",
        price: 260,
        option: 20,
    },
    {
        id: 7,
        title: "Faded Skinny Jeans",
        price: 210,
    }
]

export const ShortsObj: ClotheObjProps[] = [
    {
        id: 8,
        title: "Loose Fit Bermuda Shorts",
        price: 80,
    }
]

export const clotheTShirtsCards = createClotheCards('t-shirt', TshirtsObjs);
export const clotheShirtCards = createClotheCards('shirt', ShirtObjs);
export const clotheShortsCards = createClotheCards('short', ShortsObj);
export const clotheJeansCards = createClotheCards('jeans', JeansObjs);