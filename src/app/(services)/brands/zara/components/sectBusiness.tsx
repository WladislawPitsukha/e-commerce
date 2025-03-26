"use client"

import "../globals.css"
import PieChartD from './diagrams/pieChartD';
import BarChartD from './diagrams/barChartD';
import { arrCountryData } from '../constants/arrCountryZara';
import MapChart from "./mapChart";

export default function SectBusiness() {
    return(
        <section className="flex flex-col w-full h-auto justify-around items-center my-10 px-[50px]">
            <div className="flex justify-between items-start gap-5">
                <PieChartD />
                <BarChartD />
            </div>
            <div className='flex flex-col justify-between items-start gap-1 my-10'>
                <h2 className='text-3xl font-bold mb-8 text-black'>
                    List of counties 
                </h2>
                <div className='flex justify-between items-start'>
                    <article className='flex justify-center items-center p-[10px]'>
                        <ul className='text-black list-with-circles'>
                            {arrCountryData.map(item => (
                                <li key={item.id} className='text-black font text-[20px] cursor-pointer hover:text-gray-600'>
                                    {item.country.countryName}
                                </li>
                            ))}
                        </ul>
                    </article>
                    <MapChart />
                </div>
            </div>
        </section>
    )
}