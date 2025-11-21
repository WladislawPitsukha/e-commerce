//TODO: to debug
//TODO: fix component to check of correct working
//TODO: to check all component ui 

//TODO: Fix the brand data fetching logic in case of brand not found issue.
//TODO: Ensure proper capitalization and spacing when deriving brand name from URL slug.
//TODO: Add error handling for invalid brand slugs in the URL.
//TODO: Consider adding a loading spinner or placeholder while brand data is being fetched.
//TODO: fix component to check of correct working
//TODO: use Typescript types where possible
//TODO: optimize imports
//TODO: clean up code
//TODO: improve error handling

"use client"

import Footer from "@/components/mainPage/footer";
import Header from "@/components/mainPage/header";
import NavBar from "@/components/mainPage/navbar";
import SectionCards from "@/components/mainPage/sectionCards";
import SectionComment from "@/components/mainPage/sectionComment";
import SectionStyle from "@/components/mainPage/sectionStyle";
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
                    id: 1,
                    title: "New Arrays",
                    array: newArrivals.randomCards,
                    link: "",
                },
                {
                    id: 2,
                    title: 'Top selling',
                    array: topSelling.randomCards,
                    link: "",
                }
            ].map((article) =>(
                <SectionCards 
                    key={article.id}
                    {...article}
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