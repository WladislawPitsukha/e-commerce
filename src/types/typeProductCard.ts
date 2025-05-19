import { ComSectProps } from "./typeComSect";

export type ClotheMainObjProps = {
    id: number;
    img?: any;
    images: any[]
    title: string;
    grade: number;
    price: {
        mainPrice: number;
        option: boolean;
        procent: number;
    }
}

export type ProductCardProps = ClotheMainObjProps & {
    images?: any[]
    description: string;
    details: {
        width: number;
        height: number;
        sizes: SizeProps[];
        colors: ColorsProps[];
    };
    reviews: ComSectProps[];
    faqs: {
        id: number;
        question: string;
        answer: string;
    }[];
}

export type ColorsProps = {
    id: number;
    title: string; 
    option: string;
    status: boolean;
}

export type SizeProps = {
    id: number;
    n_size: string;
    title: string;
    status: boolean;
}