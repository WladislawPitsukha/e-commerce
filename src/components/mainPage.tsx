"use client"

import Header from "./header";
import SectionStyle from "./sectionStyle";
import ClothesCard from "./clothesCard";

import { arrDressStyle } from "@/constants/arrDressStyle";
import { arrShirtsObjs } from "@/constants/cardsMainObj/arrShirtsObjs";
import useRandomCards from "@/utils/randomCards";
import { use, useEffect } from "react";
import SectionCards from "./sectionCards";

export default function MainPage() {
    const newArrivals = useRandomCards('new');
    const topSelling = useRandomCards('top');

    useEffect(() => {
        newArrivals.getRandomCard();
        topSelling.getRandomCard();
    }, []);

    return(
        <main className="flex flex-col items-center">
            <Header />
            {[
                {
                    title: "New Arrays",
                    array: newArrivals.randomCards,
                    link: "",
                },
                {
                    title: 'Top selling',
                    array: topSelling.randomCards,
                    link: "",
                }
            ].map((item, index) =>(
                <SectionCards 
                    key={index}
                    {...item}
                />
            ))}
            <SectionStyle 
                arr={arrDressStyle}
                num1={0}
                num2={2}
                num3={2}
                num4={4}
            />
        </main>
    )
}