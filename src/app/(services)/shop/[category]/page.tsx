import Footer from "@/components/footer";
import { getProductsByCategory } from "../utils/products";
import NavBar from "@/components/navbar";

//TODO: fix this function to get the category from the url and display the products of that category
//TODO: finish this component to display the products of the selected category

export default function CategoryPage({ params } : {
    params: {
        category: string
    }
}) {
    const products = getProductsByCategory(params.category)

    return (
        <div>
            
        </div>
    );
}