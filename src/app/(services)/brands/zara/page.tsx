"use client"

import HeaderZara from "./components/headZara";
import SectPartners from "./components/sectPartners";
import SectBusiness from "./components/sectBusiness";
import SectComprasion from "./components/sectComprasion";

import { BrandsProps } from "../types/typeBrands";
import { useEffect, useState } from "react";
import { arrBrands } from "../constants/arrBrands";

//TODO: torn apart the func for all components
//TODO: make params for all components 

export default function Home() {
  const [brandData, setBrandData] = useState<BrandsProps | null>(null);
  
  useEffect(() => {
    const zaraData = arrBrands.find((brand) => {
      return brand.brand.name === "Zara"
    })

    if(zaraData) {
      setBrandData(zaraData);
    }
  }, []);

  if(!brandData) {
    return <div>Loading...</div>
  }

  const {
    brand,
    description,
    business,
    partners,
    comprasions,
  } = brandData

  const {
    id,
    name,
    links: {
      mainLink,
      webpageLink,
    }
  } = brand;

  const {
    story,
    photos,
  } = description;

  const {
    countryData,
    growthData,
    salesData,
  } = business;

  return (
    <div className="flex flex-col justify-center bg-white">
      <HeaderZara
        id={id}
        name={name}
        story={story}
        photos={photos}
      />
      <main className="flex flex-col items-center justify-between">
        <SectBusiness
          country={countryData}
          growth={growthData}
          sales={salesData}
        />
        <SectPartners 
          partners={partners}
        />
        <SectComprasion />
      </main>
    </div>
  );
}