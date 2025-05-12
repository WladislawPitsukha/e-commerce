//TODO: fix this function to get the category from the url and display the products of that category
//TODO: finish this component to display the products of the selected category

import { ProductCardProps } from "@/types/typeProductCard";
import HeaderProduct from "../../components/headerProduct";
import { activewearProducts } from "./arrDataProducts";

export default function HomePage() {
    const arrayProduct1 = activewearProducts[0]

    const {
        images,
    } = arrayProduct1

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <HeaderProduct 
                images={images}

            />
        </div>
    );
}