"use client"

import Link from "next/link";
import React, { useState } from "react";
import Form from "next/form";

import { arrTitleLinks } from "@/constants/navBar/arrTitleLinks";
import { arrIconNavlinks } from "@/constants/navBar/arrIconNavLinks";

import { IoSearch } from "react-icons/io5";
import { CreateIcon } from "./creationIcon";

export default function NavBar() {
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Searching process: ', searchTerm);
    }

    return(
        <nav className="flex justify-around items-center my-6 sticky top-0 left-0 bg-white z-50">
            <h2 className="text-[32px] font-bold leading-[38.4px] text-left text-black">
                SHOP.COM
            </h2>
            <article className="flex justify-between items-center gap-6">
                {arrTitleLinks.map((item, index) => (
                    <Link 
                        href={`/${item.link}`}
                        key={index}
                    >
                        <h3 className="font-normal text-base leading-[21.6px] text-black">
                            {item.title}
                        </h3>
                    </Link>
                ))}                             
            </article>
            <Form 
                action="/search"
                className="relative flex items-center"
                onSubmit={handleSubmit}
            >
                <IoSearch
                    className="absolute left-3 w-5 h-5 text-[#00000066]"
                />
                <input  
                    type="text"
                    value={searchTerm}
                    className="py-2 pl-10 pr-4 w-[577px] h-12 border rounded-full outline-none bg-[#F0F0F0]"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for products..."
                />
            </Form>
            <article className="flex items-center justify-between gap-4">
                {arrIconNavlinks.map((item, index) => (
                    <Link 
                        href={`/${item.link}`} 
                        key={index}
                    >
                        <CreateIcon icon={item.icon} />
                    </Link>
                ))}
            </article>
        </nav>
    )
}