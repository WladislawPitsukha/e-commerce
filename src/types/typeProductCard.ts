import { ComSectProps } from "./typeComSect";

export type ClotheMainObjProps = {
    id: number;
    img: any;
    title: string;
    grade: number;
    price: {
        mainPrice: number;
        option: boolean;
        procent: number;
    }
}

export type ProductCardProps = ClotheMainObjProps & {
    images: any[]
    description: string;
    details: {
        width: number;
        height: number;
        size: string;
        colors: string[];
    };
    reviews: ComSectProps[];
    faqs: {
        id: number;
        question: string;
        answer: string;
    }[];
}