import { arrIconLinks } from "@/constants/arrIconLinks";
import { arrPayments } from "@/constants/arrPayments";
import { arrTextLinks } from "@/constants/arrTextLinks";

import Image from "next/image";

export default function Footer() {
    return(
        <footer className="flex flex-col gap-6 pt-32 pb-20 px-[100px]  bg-[#F0F0F0]">
            <section className="flex justify-between">
                <aside className="flex flex-col items-start gap-[35px]">
                    <div className="flex flex-col items-start gap-6">
                        <h2 className="text-[32px] font-bold leading-[38.4px] text-left text-black">
                            SHOP.CO
                        </h2>
                        <p className="font-satoshi text-sm font-normal leading-[22px] text-left text-[#00000099] w-60">
                            We have clothes that suits your style and which you’re proud to wear. From women to men.
                        </p>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                        {arrIconLinks.map((obj, index) => (
                            <div 
                                className="border border-[#F0F0F0] bg-white p-[7px] rounded-full"
                                key={index}
                            >
                                <a href={obj.link} className="underline-offset-0">
                                    <obj.icon 
                                        className="w-[13.55px] h-[13.55px]"
                                        title={obj.title}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </aside>
                {arrTextLinks.map((obj, index)  => (
                    <article className="flex flex-col items-start gap-[26px] h-full w-auto" key={index}>
                        <h3 className="font-satoshi text-base font-bold leading-[18px] tracking-[3px] text-left underline-offset-[from-font] decoration-skip-ink-none text-black">
                            {obj.title}
                        </h3>
                        {obj.array.map((obj, index) => (
                            <a 
                                key={index}
                                href={obj.link}
                                className="underline-offset-0"
                            >
                                <h5 
                                    className="font-satoshi text-base font-normal text-left text-[#00000099]"
                                    key={index}
                                >
                                    {obj.textLink}
                                </h5>
                            </a>
                        ))}
                    </article>
                ))}
            </section>
            <hr className="border border-[rgba(0, 0, 0, 0.1)]" />
            <section className="flex justify-between items-center">
                <h2 className="font-satoshi text-sm font-normal leading-[18.9px] text-right text-[#00000099]">
                    Shop.co © 2000-2023, All Rights Reserved
                </h2>
                <div className="flex items-center gap-3">
                    {arrPayments.map((item, index) => (
                        <div
                            className="shadow-[0px_0.45px_4.48px_0px_rgba(183,183,183,0.08),0px_4.48px_8.96px_0px_rgba(183,183,183,0.08)] border-[0.22px] border-[#D6DCE5] bg-white rounded-tl-[5.38px] px-[10px] py-[6px]"
                            key={index}
                        >
                            <Image 
                                className="w-10 h-4"
                                key={index}
                                src={item}
                                alt={`Payment method ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </footer>
    )
}