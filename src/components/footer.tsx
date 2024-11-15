import { arrayIconLinks, arrayTextLinks } from "@/types/typeFooLinks";

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
                        {arrayIconLinks.map((obj, index) => (
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
                {arrayTextLinks.map((obj, index)  => (
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
            <br className="" />
            <section className="flex justify-between items-center">
                
            </section>
        </footer>
    )
}