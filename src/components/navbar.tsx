import { arrIconlinks } from "@/constants/navBar/arrIconLinks";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { arrTitleLinks } from "@/constants/navBar/arrTitleLinks";
import FormSearching from "./FormSearching";

export function CreateIcon({icon}: {icon: IconType}):JSX.Element {
    const Icon = icon;

    return <Icon className="w-6 h-6 text-black" />
}

export default function NavBar() {
    return(
        <nav className="flex justify-around items-center my-6 sticky top-0 left-0 bg-white z-50">
            <h2 className="text-[32px] font-bold leading-[38.4px] text-left text-black">
                SHOP.COM
            </h2>
            <article className="flex justify-between items-center gap-6">
                {arrTitleLinks.map((item, index) => (
                    <Link href={`/${item.link}`}>
                        <h3
                            className="font-normal text-base leading-[21.6px] text-black"
                            key={index}>
                            {item.title}
                        </h3>
                    </Link>
                ))}                              
            </article>
            <FormSearching />
            <article className="flex items-center justify-between gap-4">
                {arrIconlinks.map((item, index) => (
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