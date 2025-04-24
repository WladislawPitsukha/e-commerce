"use client";

import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

import { ReactNode } from "react";

interface ShopLayoutProps {
    children: ReactNode;
    category?: string;
}

//TODO: finish this component to display the products of the selected category

export default function ShopPage({ children, category }: ShopLayoutProps) {
    return(
        <div className="flex flex-col justify-center bg-white">
            <NavBar />
            <main className="flex justify-between items-start px-[50px] py-[30px]">
                <aside className="w-[250px] sticky top-[100px]">
                    <h2 className="text-2xl font-bold mb-4">Categories</h2>
                    {/* Add categories navigation */}
                </aside>
                <section className="flex-1 ml-8">
                    <h1 className="text-3xl font-bold mb-6">
                        {category || "All Products"}
                    </h1>
                    {children}
                </section>
            </main>
            <Footer />
        </div>
    )
}