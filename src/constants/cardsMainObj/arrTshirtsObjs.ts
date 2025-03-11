import TShirt1 from "@/assets/img/t-shirt/t-shirt1.png";
import TShirt2 from "@/assets/img/t-shirt/t-shirt2.png";
import TShirt3 from "@/assets/img/t-shirt/t-shirt3.png";

import { ClotheObjProps } from "@/types/typeClotheCard";

export const arrTshirtsObjs: ClotheObjProps[] = [
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