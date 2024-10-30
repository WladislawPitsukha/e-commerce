import Footer from "@/components/footer";
import Header from "@/components/header";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <NavBar />
      <main className="flex flex-col items-start">
        <Header />
      </main>
      <Footer />
    </div>
  );
}