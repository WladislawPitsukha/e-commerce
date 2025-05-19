//TODO: fix this function to get the category from the url and display the products of that category
//TODO: finish this component to display the products of the selected category

import HeaderProduct from "../../components/headerProduct";
import { activewearProducts } from "./arrDataProducts";

export default function HomePage() {
    const arrayProduct1 = activewearProducts[0]

    const {
        id,
        images,
        title,
        grade,
        price,
        description,
        details, 
    } = arrayProduct1

    return (
        //TODO: fix function for mistakes, change params for another products
        <div 
            className="flex flex-col items-center justify-center h-screen w-full"
            key={id}
        >
            <HeaderProduct 
                //TODO: add all props for func
                id={id}
                images={images}
                title={title}
                grade={grade}
                description={description}
                price={price}
                details={details}
            />
            //TODO: make and add the components for this page
        </div>
    );
}