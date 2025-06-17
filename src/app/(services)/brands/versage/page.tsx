import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import VersacePage from "./components/versacePage";


export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <NavBar />
      <VersacePage />
      <Footer />
    </div>
  );
}