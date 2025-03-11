import { arrDressStyle } from "@/constants/arrDressStyle";
import Header from "./header";
import SectionStyle from "./sectionStyle";

export default function MainPage() {
    return(
        <main className="flex flex-col items-center">
            <Header />
            <section className="flex flex-col gap-14 mt-[72px]">
                <h2 className="font-integral text-5xl font-bold leading-[57.6px] text-center text-black uppercase">
                    New Arrivals
                </h2>
            </section>
            <section className="flex flex-col gap-14">
                <h2 className="font-integral text-5xl font-bold leading-[57.6px] text-center text-black uppercase">

                </h2>
            </section>
            <SectionStyle 
                arr={arrDressStyle}
                num1={0}
                num2={2}
                num3={2}
                num4={4}
            />
        </main>
    )
}