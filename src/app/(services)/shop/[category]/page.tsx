import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

//TODO: fix this function to get the category from the url and display the products of that category

export default function Home() {
    return (
        <div className="flex flex-col justify-center bg-white">
            <NavBar />
            <Footer />
        </div>
    );
}