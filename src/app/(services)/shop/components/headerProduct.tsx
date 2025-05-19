"use client";

import { CreationGrade } from "@/components/creationGrade";
import { CreationPrice } from "@/components/creationPrice";
import { ProductCardProps } from "@/types/typeProductCard";

import { IoCheckmark } from "react-icons/io5";

import Image from "next/image";
import { useState } from "react";
import { CreateIcon } from "@/components/creationIcon";
import { IconType } from "react-icons";
import { FaMinus, FaPlus } from "react-icons/fa6";

export function ButtonAmount({icon, func, color}: {
    icon: IconType;
    func: any;
    color: string;
}) {
    return(
        <button 
            className="w-6 h-6"
            onClick={func}
        >
            <CreateIcon icon={icon} className={`$text-${color}`} />
        </button>
    )
}

export default function HeaderProduct({
    id,
    images,
    title,
    grade,
    price,
    description,
    details,

}: ProductCardProps) {
    const [imageChoice, setImageChoice] = useState(images[0]);
    const [amountProduct, setAmountProduct] = useState<number>(0);

    const { mainPrice, option, procent } = price;
    const { sizes, colors } = details;

    const handleClick = () => {
        if(Array.isArray(images)) {
            const currentIndex = images.indexOf(imageChoice);
            const nextIndex = (currentIndex + 1) % images.length;
            
            setImageChoice(images[nextIndex])
        }
    }

    const incrAmount = () => {
        if(amountProduct < 100) {
            setAmountProduct(prev => prev + 1)
        }
    }

    const decrAmount = () => {
        if(amountProduct > 1) {
            setAmountProduct(prev => prev - 1)
        }
    }

    const textItemsBlock = "flex flex-col items-start justify-center";

    return (
        <header key={id} className="flex flex-col justify-center items-center gap-9 h-auto w-auto px-[100px]">
            <div className="">

            </div>
            <div className="flex justify-between items-center gap-10">
                <article className="flex justify-center items-center gap-[14px]">
                    <div className="flex flex-col justify-center items-center gap-[14px]">
                        {images.map((image, index) => (
                            <Image 
                                src={image}
                                className="w-[152px] h-[168px] rounded-[20px] bg-[#F0EEED] cursor-pointer"
                                onClick={handleClick}
                                alt={`Product's image by id: ${index}`}
                            />
                        ))}
                    </div>
                    <div>
                        <Image 
                            className="w-[444px] h-[530px] rounded-[20px] bg-[#F0EEED]"
                            src={imageChoice}
                            alt="Product's image"
                        />
                    </div>
                </article>
                <article className={`${textItemsBlock} gap-6`}>
                    <div className={`${textItemsBlock} gap-5`}>
                        <h1 className={`font-integral uppercase font-bold text-40 leading-100 tracking-0 align-middle text-black`}>
                            {title}
                        </h1>
                        <div className="flex flex-col items-start gap-[14px]">
                            <CreationGrade 
                                className="text-black"
                                grade={grade}
                            />
                            <CreationPrice
                                mainPrice={mainPrice}
                                option={option}
                                procent={procent}
                            />
                        </div>
                        <p className={`w-auto font-satoshi text-gray-600 font-normal text-base leading-[22px] tracking-[0%]`}>
                            {description}
                        </p>
                    </div>
                    //TODO: make a one component, but change div for buttons
                    //TODO: make a component of button, not to copy one to another
                    <div className="flex flex-col items-start gap-4">
                        <h3 className="font-satoshi font-normal text-base leading-100 tracking-0 text-black/60">
                            Select Colors
                        </h3>
                        <div className="flex justify-center items-center gap-4">
                            {colors.map((color) => (
                                <div className={`flex justify-center cursor-pointer items-center rounded-full w-[37px] h-[37px]`} style={{background: color.option}} key={color.id}>
                                    {color.status === true ? (<IoCheckmark className={`w-4 h-4 text-white`} />) : null }
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                        <h3 className="font-satoshi font-normal text-base leading-100 tracking-0 text-black/60">
                            Choose Size
                        </h3>
                        <div className="flex justify-between items-center gap-3">
                            {sizes.map((size) => (
                                <div 
                                    className={`w-auto h-auto py-3 px-6 bg-[#f0f0f0] rounded-[62px] cursor-pointer`}
                                    key={size.id}
                                >
                                    <h3 className={`font-satoshi font-normal text-16 leading-100 tracking-0 text-black/60`}>
                                        {size.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        //TODO: change ButtonAmount to use with two difference params
                        <div className="flex justify-between items-center w-auto h-auto  rounded-[62px] px-5 py-4 ">
                            <ButtonAmount 
                            //TODO: fix color changing
                                icon={FaMinus}
                                func={decrAmount}
                                color="black"
                            />
                            <h2 className="font-satoshi font-medium text-base leading-[100%] tracking-[0%] text-black">
                                {amountProduct}
                            </h2>
                            <ButtonAmount 
                                icon={FaPlus}
                                func={incrAmount}
                                color="black"
                            />
                        </div>
                        <button className="rounded-custom px-[54px] py-[16px] bg-custom-black cursor-pointer" type="submit">
                            <h2 className="font-satoshi font-medium text-16 leading-100 tracking-0 text-custom-white">
                                Add to Cart
                            </h2>
                        </button>
                        //TODO: add button & func's logic of amount of product
                    </div>
                </article>
            </div>
        </header>
    )
}