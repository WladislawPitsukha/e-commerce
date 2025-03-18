import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import ZaraPage from "./components/zaraPage";
import HeaderZara from "./components/headZara";


export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <NavBar />
      <HeaderZara />
      <ZaraPage />
      <Footer />
    </div>
  );
}