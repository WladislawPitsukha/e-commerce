import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import ZaraPage from "./components/zaraPage";


export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <NavBar />
      <ZaraPage />
      <Footer />
    </div>
  );
}