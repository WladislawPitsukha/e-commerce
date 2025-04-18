"use client"

import "../globals.css"

import PieChartD from './diagrams/pieChartD';
import BarChartD from './diagrams/barChartD';
import MapChart from "./mapChart";

import { useState } from "react";
import { arrCountryZara } from "../constants/arrCountryZara";

export default function SectBusiness() {
    const [hoveredCountry, setHovered] = useState<string | null>(null);
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

    const handleCountryClick = (countryName: string) => {
        setSelectedCountry(countryName);
    };

    return(
        <section className="flex flex-col w-full h-auto justify-around items-center bg-white my-10 px-[50px]">
            <div className="flex justify-evenly items-start gap-5 w-full">
                <PieChartD />
                <BarChartD />
            </div>
            <div className='flex flex-col justify-center items-center gap-1 my-10 w-full'>
                <h2 className='text-3xl font-bold mb-8 text-black'>
                    List of counties 
                </h2>
                <div className='flex justify-evenly items-center w-full'>
                    <article className='flex justify-center items-center p-[10px]'>
                        <ul className='text-black list-with-circles'>
                            {arrCountryZara.map(obj => (
                                <li 
                                    key={obj.id} 
                                    className='text-black font text-[20px] cursor-pointer hover:text-gray-600'
                                    onMouseEnter={() => setHovered(obj.country.countryName)}
                                    onMouseLeave={() => setHovered(null)}
                                    onClick={() => handleCountryClick(obj.country.countryName)}
                                >
                                    {obj.country.countryName}
                                </li>
                            ))}
                        </ul>
                    </article>
                    <MapChart 
                        hoveredCountry={hoveredCountry}
                        selectedCountry={selectedCountry}
                    />
                </div>
            </div>
        </section>
    )
}