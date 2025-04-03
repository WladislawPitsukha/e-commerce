import { Grid, Table, TableBody, TableCell, TableContainer, TableHead } from "@mui/material";
import Link from "next/link";

import { BrandsProps } from "../../types/typeBrands";
import { arrBrands } from "../../constants/arrBrands";
import { arrCountryData } from "../constants/arrCountryZara";
import { CountryDataProps } from "../../types/typeCountryData";

export function BlockArtComprasion(arr: BrandsProps) {
    return(
        <article className="flex flex-col items-center justify-between">
            <h4 className="text-black">
                {arr.name}
            </h4>
            <div>
                {[{
                    link: arr.links.mainLink,
                    title: "Landing",
                }, {
                    link: arr.links.webpageLink,
                    title: "The website",
                }].map((obj, index) => (
                    <Link href={obj.link} key={index}>
                        <h5 className="text-black">
                            {obj.title}
                        </h5>
                    </Link>
                ))}
            </div>
        </article>
    )
}

export default function SectComprasion() {
    const averageValue = (propertyData: keyof CountryDataProps['financeData']):number => {
        const sum = arrCountryData.reduce((acc, country) => {
            return acc + country.financeData[propertyData];
        }, 0)

        return Number(Math.floor((sum / arrCountryData.length)).toFixed(2));
    }

    const tableHeadProps: string[] = [
        "Revenue Brand",
        "Revenue Competitor",
        "Market Share Brand",
        "Market Share Competitor",
        "Store count Brand",
        "Store count Competitor",
    ];

    const tableBodyProps: (number | string)[] = [
        `$ ${averageValue('revenue')} mln`,
        0,
        averageValue('marketShare'),
        0,
        averageValue('storeCount'),
        0,
    ];

    return(
        <section className="flex items-start justify-evenly w-full h-auto my-10 px-[50px] gap-4 bg-white">
            <BlockArtComprasion {...arrBrands[0]} />
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        {tableHeadProps.map((title) => (
                            <TableCell>
                                <h5 className="w-24">
                                    {title}
                                </h5>
                            </TableCell>
                        ))}
                    </TableHead>
                    <TableBody>
                        {tableBodyProps.map((title) => (
                            <TableCell>
                                <h5 className="w-24">
                                    {title}
                                </h5>
                            </TableCell>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid 
                style={{background: ''}} 
                container 
                rowSpacing={2} 
                columnSpacing={2}
            >
                {arrBrands.slice(1, 5).map((brand) => (
                    <Grid size={5}>
                        <BlockArtComprasion {...brand} key={brand.id} />
                    </Grid>
                ))}
            </Grid>
        </section>
    )
}