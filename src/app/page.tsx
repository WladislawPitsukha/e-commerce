import Footer from "@/components/footer";
import MainPage from "@/components/mainPage";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <NavBar />
      <MainPage />
      <Footer />
    </div>
  );
}