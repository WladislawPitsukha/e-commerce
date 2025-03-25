"use client"

import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import { arrGrowthZara } from "../../constants/arrSalesZara";
import { useState } from "react";

export default function PieChartD() {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

    return(
        <article className="my-10 bg-white">
            <h2 className='text-3xl font-bold mb-8 text-black'>
                Growth Distribution of Zara
            </h2>
            <PieChart width={400} height={400}>
                <Pie
                    data={arrGrowthZara}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={150}
                    fill='white'
                    dataKey="growth"
                    nameKey="year"
                    label={({name}) => (
                        `${name}`
                    )}
                >
                    {arrGrowthZara.map((item, index) => {
                        const [color, setColor] = useState("black")
                        return(
                            <Cell 
                                key={`cell-${index}`}
                                fill={color}
                                onMouseEnter={() => setColor(COLORS[Math.floor(Math.random() * COLORS.length)])}
                                onMouseLeave={() => setColor("black")}
                            />
                        )
                    })}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </article>
    )
}