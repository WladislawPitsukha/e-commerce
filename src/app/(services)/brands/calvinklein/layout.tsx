import type { Metadata } from "next";
import "./globals.css";
import {Roboto_Mono} from 'next/font/google';

export const roboto_mono = Roboto_Mono({
  subsets:['latin'],
  style:['normal'],
  weight: ['400', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Brands / Calvin Klein",
  description: "Created for e-commerce's project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        {children}
      </body>
    </html>
  );
}
