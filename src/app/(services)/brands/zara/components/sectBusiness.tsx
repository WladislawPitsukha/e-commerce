"use client"

import PieChartD from './diagrams/PieChartD';
import BarChartD from './diagrams/barChartD';


export default function SectBusiness() {
    return(
        <section className="flex w-full h-auto justify-around items-center my-10 px-[50px] bg-white">
            <div className="flex justify-between items-center">
                <PieChartD />
                <BarChartD />
            </div>
            <div className=''>

            </div>
        </section>
    )
}