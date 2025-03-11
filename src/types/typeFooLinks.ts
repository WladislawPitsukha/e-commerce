import { IconType } from "react-icons";

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