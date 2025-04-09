import { ProductPhotos } from "../zara/constants/arrProductsZara"
import { CountryDataProps } from "./typeCountryData"
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
        photos: ProductPhotos[],
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
    grouthData: SalesDataProps[],
    salesData: SalesDataProps[],
}   