"use client"

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { arrBrands } from "../../../constants/brands/arrBrands";
import { BrandsProps } from "../types/typeBrands";

import HeaderSect from "@/components/brandsPage/headSect";
import SectBusiness from "@/components/brandsPage/sectBusiness";
import SectPartners from "@/components/brandsPage/sectPartners";
import SectComprasion from "@/components/brandsPage/sectComprasion";

export default function Home() {
  const [brandData, setBrandData] = useState<BrandsProps | null>(null);

  const params = useParams();
  const brandSlug = params.brands as string;
  
  useEffect(() => {
    const brandName = brandSlug
      .split(/(?=[A-Z])/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

      const foundBrand = arrBrands.find((brand) => {
        brand.brand.name.toLowerCase() === brandName.toLowerCase();
      });

      if(foundBrand) {
        setBrandData(foundBrand);
      }

  }, [brandSlug]);

  if(!brandData) {
    return <div>Loading...</div>;
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
      <HeaderSect
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