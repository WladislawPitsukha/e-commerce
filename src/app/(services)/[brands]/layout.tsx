import type { Metadata } from "next";
import "./globals.css";
import {Roboto_Mono} from 'next/font/google';
import NavBar from "@/components/mainPage/navbar";

export const roboto_mono = Roboto_Mono({
  subsets:['latin'],
  style:['normal'],
  weight: ['400', '700'],
  display: 'swap'
});

export type Props = {
  params: Promise<{ brands: string}>;
}

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const { brands } = await params;
  const brandName = brands.charAt(0).toUpperCase() + brands.slice(1).toLowerCase();

  return {
    title: `Brands / ${brandName}`,
    description: "Created for e-commerce's project",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_mono.className} style={{
        backgroundColor: "white",
      }}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
