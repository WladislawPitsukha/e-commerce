import Jeans1 from "@/assets/img/jeans/jeans1.png";
import Jeans2 from "@/assets/img/jeans/jeans2.png";
import Shirt1 from "@/assets/img/shirt/shirt1.png";
import Shirt2 from "@/assets/img/shirt/shirt2.png";
import Short1 from "@/assets/img/short/short1.png";
import TShirt1 from "@/assets/img/t-shirt/t-shirt1.png";
import TShirt2 from "@/assets/img/t-shirt/t-shirt2.png";
import TShirt3 from "@/assets/img/t-shirt/t-shirt3.png";

export type ClotheObjProps = {
    id: number;
    img: any;
    title: string;
    price: number;
    option?: boolean;
    procent: number;
}

export const TshirtsObjs: ClotheObjProps[] = [
    {
        id: 1,
        img: TShirt1,
        title: "T-shirt with Tape Details",
        price: 120,
        procent: 0
    },
    {
        id: 2,
        img: TShirt2,
        title: "Sleeve Striped T-shirt",
        price: 160,
        option: true,
        procent: 30
    },
    {
        id: 3,
        img: TShirt3,
        title: "Courage Graphic T-shirt",
        price: 145,
        procent: 0
    }
];

export const ShirtsObjs: ClotheObjProps[] = [
    {
        id: 1,
        img: Shirt1,
        title: "Checkered Shirt",
        price: 180,
        procent: 0
    },
    {
        id: 2,
        img: Shirt2,
        title: "Vertical Striped Shirt",
        price: 232,
        option: true,
        procent: 30
    }
];

export const JeansObjs: ClotheObjProps[] = [
    {
        id: 1,
        img: Jeans1,
        title: "Skinny Fit Jeans",
        price: 260,
        option: true,
        procent: 20
    },
    {
        id: 2,
        img: Jeans2,
        title: "Faded Skinny Jeans",
        price: 210,
        procent: 0
    }
];

export const ShortsObj: ClotheObjProps[] = [
    {
        id: 1,
        img: Short1,
        title: "Loose Fit Bermuda Shorts",
        price: 80,
        procent: 0
    }
];