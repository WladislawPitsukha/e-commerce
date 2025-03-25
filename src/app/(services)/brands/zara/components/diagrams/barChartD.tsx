"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { arrSalesZara } from '../../constants/arrSalesZara';

export default function BarChartD() {
    return(
        <article className="flex flex-col items-center my-10 bg-white">
            <h2 className="text-3xl font-bold mb-8 text-black">
                Sales of Zara for 2020-2025
            </h2>
            <BarChart
                width={500}
                height={400}
                data={arrSalesZara}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="growth" fill="black" name="Growth" />
            </BarChart>
        </article>
    )
}