import { IconType } from "react-icons";
import { RiAccountCircleLine } from "react-icons/ri";
import { SlBasket } from "react-icons/sl";
import FormSearching from "./FormSearching";


export default function NavBar() {
    const icons: IconType[] = [SlBasket, RiAccountCircleLine];
    const links: string[] = ["Shop", "On Sale", "New Arrivals", "Brands"];

    return(
        <nav className="flex justify-around items-center my-6">
            <h2 className="text-[32px] font-bold leading-[38.4px] text-left text-black">
                SHOP.CO
            </h2>
            <article className="flex justify-between items-center gap-6">
                {links.map((item, index) => (
                    <h3
                        className="font-normal text-base leading-[21.6px] text-black"
                        key={index}
                    >
                        {item}
                    </h3>
                ))}                              
            </article>
            <FormSearching />
            <article className="flex items-center justify-between gap-4">
                {icons.map((Icon, index) => (
                    <Icon 
                        key={index}
                        className="w-6 h-6 text-black"
                    />
                ))}
            </article>
        </nav>
    )
}