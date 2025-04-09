import React from "react";
import SectPartners from "./sectPartners";
import SectComprasion from "./sectComprasion";
import SectBusiness from "./sectBusiness";

export default function ZaraPage() {
    return(
        <main className="flex flex-col items-center justify-between">
            <SectBusiness />
            <SectPartners />
            <SectComprasion />
        </main>
    )
}