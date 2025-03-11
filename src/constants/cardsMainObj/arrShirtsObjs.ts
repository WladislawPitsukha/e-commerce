import Shirt1 from "@/assets/img/shirt/shirt1.png";
import Shirt2 from "@/assets/img/shirt/shirt2.png";

import { ClotheObjProps } from "@/types/typeClotheCard";

export const arrShirtsObjs: ClotheObjProps[] = [
    {
        id: 1,
        img: Shirt1,
        title: "Checkered Shirt",
        price: 180,
        option: false,
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