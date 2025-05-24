//TODO: fix this function to get the category from the url and display the products of that category
//TODO: finish this component to display the products of the selected category

import { Details } from "@mui/icons-material";
import HeaderProduct from "../../components/headerProduct";
import { activewearProducts } from "./arrDataProducts";
import FaqsProduct from "../../components/faqsProduct";
import ReviewsProduct from "../../components/reviewsProduct";

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
        reviews
    } = arrayProduct1

    return (
        //TODO: fix function for mistakes, change params for another products
        <div 
            className="flex flex-col items-center justify-center h-full w-full"
            key={id}
        >
            <HeaderProduct
                //TODO?: change arrays
                id={id}
                images={images}
                title={title}
                grade={grade}
                description={description}
                price={price}
                details={details}
            />
            <section className="flex flex-col items-center w-full">
                //TODO: make tabs for this components
                <div className="flex justify-evenly items-center w-full">
                    {["Product Details", "Rating & Reviews", "FAQs"].map((title, index) => (
                        <h2 className={`font-satoshi font-normal text-[20px] text-black/60 leading-trim-cap`}>
                            {title}
                        </h2>
                    ))}
                </div>
                <Details />
                <ReviewsProduct array={reviews} />
                <FaqsProduct />
            </section>
            //TODO: make and add the components for this page
        </div>
    );
}