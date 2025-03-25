export type CountryDataProps = {
    id: number;
    country: string;
    financeData: FinanceData;
}

type FinanceData = {
    revenue: number; 
    marketShare: number;
    storeCount: number;
    onlinePresence: number;
}