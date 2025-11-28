//TODO: to debug
//TODO: fix component to check of correct working
//TODO: to check all component ui 
//TODO: Fix the brand data fetching logic in case of brand not found issue.
//TODO: Ensure proper capitalization and spacing when deriving brand name from URL slug.
//TODO: Add error handling for invalid brand slugs in the URL.
//TODO: Consider adding a loading spinner or placeholder while brand data is being fetched.
//TODO: fix component to check of correct working
//TODO: use Typescript 7types where possible
//TODO: optimize imports
//TODO: clean up code
//TODO: improve error handling

"use client"

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { arrBrands } from "../../../constants/brands/arrBrands";

import HeaderSect from "@/components/brandsPage/headSect";
import SectBusiness from "@/components/brandsPage/sectBusiness";
import SectPartners from "@/components/brandsPage/sectPartners";
import SectComprasion from "@/components/brandsPage/sectComprasion";
import { BrandsProps } from "@/types/typeBrands";

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