import Footer from "@/components/footer";
import Header from "@/components/header";
import NavBar from "@/components/navbar";
import NewArrivals from "@/components/newArrivals";
import SectionStyle from "@/components/sectionStyle";
import { dressStyle } from "@/types/typeDressStyle";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <NavBar />
      <main className="flex flex-col items-center">
        <Header />
        <section className="flex flex-col gap-14">
          <h2 className="font-integral text-5xl font-bold leading-[57.6px] text-center text-black uppercase">
            New Arrivals
          </h2>
          
        </section>
        <section className="flex flex-col gap-14">
          <h2 className="font-integral text-5xl font-bold leading-[57.6px] text-center text-black uppercase">

          </h2>
        </section>
        <SectionStyle 
          arr={dressStyle}
          num1={0}
          num2={2}
          num3={2}
          num4={4}
        />
      </main>
      <Footer />
    </div>
  );
}