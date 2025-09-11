"use client"

import HeaderZara from "./zara/components/headZara";
import SectPartners from "./zara/components/sectPartners";
import SectBusiness from "./zara/components/sectBusiness";
import SectComprasion from "./zara/components/sectComprasion";

import { BrandsProps } from "../types/typeBrands";
import { useEffect, useState } from "react";
import { arrBrands } from "../constants/arrBrands";

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