import HeaderZara from "./components/headZara";
import SectPartners from "./components/sectPartners";
import SectBusiness from "./components/sectBusiness";
import SectComprasion from "./components/sectComprasion";

//TODO: torn apart the func for all components
//TODO: make params for all components 

export default function Home() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <HeaderZara />
      <main className="flex flex-col items-center justify-between">
        <SectBusiness />
        <SectPartners />
        <SectComprasion />
      </main>
    </div>
  );
}