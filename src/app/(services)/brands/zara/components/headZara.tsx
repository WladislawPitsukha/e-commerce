import Link from "next/link";
import { arrProductPhotos } from "../constants/arrProductsZara";
import AnimatedTitle from "./animatedTitle";
import Image from "next/image";

export default function HeaderZara() {
    return(
        <section className="flex flex-col items-center gap-10 bg-black px-[50px] py-[50px]">
            <AnimatedTitle title="Zara" />
            <div className="flex justify-between items-start gap-[100px]">
                <div className="grid grid-cols-3 gap-2 w-auto h-auto">
                    {arrProductPhotos.map((item) => (
                        <Link href={item.link}>
                            <div className="border-double w-auto h-auto border-black bg-white p-2 rounded-2xl" key={item.id}>
                                <Image 
                                    className="w-[270px] h-[180px]"
                                    src={item.img}
                                    alt="Product Zara"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
                <article className="flex flex-col items-start w-auto h-auto justify-evenly gap-10 y p-5 rounded-2xl">
                    <h4 className="text-white text-5xl uppercase ">
                        Short story of Zara
                    </h4>
                    <p className="text-white text-xl max-w-[1200px]">
                        Zara had always dreamed of becoming a fashion designer, but growing up in a small town, she had little more than her imagination and determination. When a local design contest was announced, she saw her chance. With no fancy fabrics, she collected scraps, sewing them together with creativity and heart.
                        <br />
                        On the big day, her dress stood out—not for its luxury, but for the story it told. The judges were captivated, and Zara won. More than just a prize, the victory opened doors to a prestigious fashion school, turning her dreams into reality.
                    </p>
                </article>
            </div>
        </section>
    )
}