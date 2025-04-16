
import { CountryDataProps } from "./typeCountryData"
import { ProductProps } from "./typeProductProps"
import { SalesDataProps } from "./typeSalesProps"
import { TextlinkProps } from "./typeTextLink"

export type BasicInfoProps = {
    id: number,
    name: string,
    links: BrandsLinksProps,
}

export type BrandsProps = {
    brand: BasicInfoProps,
    description: {
        story: string[],
        photos: ProductProps[],
    },
    business: BusinessProps,
    partners: TextlinkProps[],
    comprasions: [BasicInfoProps, BasicInfoProps, BasicInfoProps, BasicInfoProps] | [],
}

export type BrandsLinksProps = {
    mainLink: string,
    webpageLink: string,
} 

export type BusinessProps = {
    countryData: CountryDataProps[],
    growthData: SalesDataProps[],
    salesData: SalesDataProps[],
}   