import { IconType } from "react-icons";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FooterIconLinks } from "@/types/typeFooLinks";

export const arrIconLinks: FooterIconLinks[] = [
    {
        icon: FaXTwitter,
        title: "Twitter",
        link: "https://twitter.com/"
    },
    {
        icon: FaFacebookF,
        title: "Facebook",
        link: "https://facebook.com/"
    },
    {
        icon: FaInstagram,
        title: "Instagram",
        link: "https://instagram.com/"
    },
    {
        icon: FaGithub,
        title: "GitHub",
        link: "https://github.com/"
    }
]