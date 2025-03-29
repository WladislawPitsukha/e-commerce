import Footer from "@/components/footer";
import ZaraPage from "./components/zaraPage";
import HeaderZara from "./components/headZara";
import NavBar from "@/components/navbar";

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