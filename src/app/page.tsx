"use client"

import Footer from "@/components/footer";
import Header from "@/components/header";
import NavBar from "@/components/navbar";
import SectionCards from "@/components/sectionCards";
import SectionComment from "@/components/sectionComment";
import SectionStyle from "@/components/sectionStyle";
import { arrDressStyle } from "@/constants/arrDressStyle";
import useRandomCards from "@/utils/randomCards";
import { useEffect } from "react";



export default function MainPage() {
    const newArrivals = useRandomCards('new');
    const topSelling = useRandomCards('top');

    useEffect(() => {
        newArrivals.getRandomCard();
        topSelling.getRandomCard();
    }, []);

    return(
        <div className="flex flex-col items-center bg-white">
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
            <SectionComment />
        </div>
    )
}