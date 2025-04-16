import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import CalvinPage from "./components/calvinKleinPage";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <NavBar />
      <CalvinPage />
      <Footer />
    </div>
  );
}