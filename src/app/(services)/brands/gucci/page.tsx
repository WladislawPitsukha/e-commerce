import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import GucciPage from "./components/gucciPage";


export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <NavBar />
      <GucciPage />
      <Footer />
    </div>
  );
}