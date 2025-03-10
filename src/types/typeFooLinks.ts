import { IconType } from "react-icons";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import Payment1 from '@/assets/img/payments/visa.png';
import Payment2 from '@/assets/img/payments/mastercard.png';
import Payment3 from '@/assets/img/payments/paypal.png';
import Payment4 from '@/assets/img/payments/apple-pay.png';
import Payment5 from '@/assets/img/payments/google-pay.png';


export type FooterTextLinks = {
    textLink: string;
    link: string;
}

export type FooterArraysText = {
    title: string;
    array: FooterTextLinks[]
}

export type FooterIconLinks = {
    icon: IconType;
    title?: string
    link: string;
}

export const arrayPayments: any[] = [Payment1, Payment2, Payment3, Payment4, Payment5];

export const arrayIconLinks: FooterIconLinks[] = [
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

export const arrayTextLinks: FooterArraysText[] = [
    {
        title: "COMPANY",
        array: [
            {
                textLink: "About",
                link: "/company/about"
            },
            {
                textLink: "Features",
                link: "/company/features"
            },
            {
                textLink: "Works",
                link: "/company/works"
            },
            {
                textLink: "Career",
                link: "/company/career"
            }
        ]
    },
    {
        title: "HELP",
        array: [
            {
                textLink: "Customer Support",
                link: ""
            },
            {
                textLink: "Deliverry Details",
                link: ""
            },
            {
                textLink: "Terms & Conditions",
                link: ""
            },
            {
                textLink: "Privacy Policy",
                link: ""
            }
        ]
    },
    {
        title: "FAQ",
        array: [
            {
                textLink: "Account",
                link: ""
            },
            {
                textLink: "Manage Deliveries",
                link: ""
            },
            {
                textLink: "Orders",
                link: ""
            },
            {
                textLink: "Payments",
                link: ""
            }
        ]
    },
    {
        title: "Resources",
        array: [
            {
                textLink: "Free eBooks",
                link: ""
            },
            {
                textLink: "Development Tutorial",
                link: ""
            },
            {
                textLink: "How to - Blog",
                link: ""
            },
            {
                textLink: "Youtube Playlist",
                link: ""
            }
        ]
    }
]