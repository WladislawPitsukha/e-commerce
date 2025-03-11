import { ClotheObjProps } from "@/types/typeClotheCard"

import Image from "next/image"

export default function ClothesCard({
    id, 
    img, 
    title, 
    price, 
    option, 
    procent
}: ClotheObjProps) {
    return(
        <article 
            className="flex flex-col items-start" 
            key={id}
        >
            <div className="flex justify-center items-center w-[295px] h-[298px] rounded-2xl bg-[#F0EEED]">
                <Image 
                    className="w-[400px] h-[280px]"
                    src={img}
                    alt="product"
                />
            </div>
            <div className="flex flex-col items-start gap-2 mt-2">
                <h5 className="font-satoshi text-xl font-bold leading-[32.4px] text-left text-black">
                    {title}
                </h5>
                <div className="flex justify gap-[10px]">
                    {option === true ? (
                        <h4 className={`font-satoshi text-xl font-bold leading-[27px] text-left text-black`}>
                            ${Math.round(price - ((price * procent) / 100))}
                        </h4>
                    ) : null}
                    <h4 className={`${option === true ? "text-[rgba(0,0,0,0.4)] line-through font-satoshi text-xl font-bold leading-[27px] text-left" : "font-satoshi text-xl font-bold leading-[27px] text-left text-black"}`}>
                        ${price}
                    </h4>
                    {option === true ? (
                        <div className={`bg-[rgba(255,51,51,0.1)] px-[13.5px] py-[6px] rounded-full`}>
                            <h5 className={`font-satoshi text-xs font-medium leading-[16.2px] text-center text-[rgba(255,51,51,1)]`}>
                                -{procent}%
                            </h5>
                        </div>
                    ) : null}
                </div>
            </div>
        </article>
    )
}