import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import PradaPage from "./components/pradaPage";


export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <NavBar />
      <PradaPage />
      <Footer />
    </div>
  );
}