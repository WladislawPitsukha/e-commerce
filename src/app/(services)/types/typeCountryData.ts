export type CountryDataProps = {
    id: number;
    country: CountryData;
    financeData: FinanceData;
}

type CountryData = {
    countryName: string;
    coordinates?: [number, number];
}

type FinanceData = {
    revenue: number; 
    marketShare: number;
    storeCount: number;
    onlinePresence: number;
}