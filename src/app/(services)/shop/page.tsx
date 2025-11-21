//TODO: to debug
//TODO: fix component to check of correct working
//TODO: to check all component ui 

//TODO: Fix the brand data fetching logic in case of brand not found issue.
//TODO: Ensure proper capitalization and spacing when deriving brand name from URL slug.
//TODO: Add error handling for invalid brand slugs in the URL.
//TODO: Consider adding a loading spinner or placeholder while brand data is being fetched.
//TODO: fix component to check of correct working
//TODO: use Typescript types where possible
//TODO: optimize imports
//TODO: clean up code
//TODO: improve error handling
//TODO: to add pagination

"use client"

import { activewearProducts } from './[category]/active/arrDataProducts';
import { casualwearProducts } from './[category]/casual/arrDataProducts';
import { officewearProducts } from './[category]/office/arrDataProducts';
import { partywearProducts } from './[category]/party/arrDataProducts';
import { summerwearProducts } from './[category]/summer/arrDataProducts';
import { winterwearProducts } from './[category]/winter/arrDataProducts';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';

import { linksPageFilter } from './constants/linksPagesFilter'
import ClothesCard from '@/components/mainPage/clothesCard';;
import { ClotheMainObjProps } from '@/types/typeProductCard';
import TextLinkPage from './components/textLinkPage';

import { useEffect, useState } from 'react';
import AccFuncBlock from './components/accFuncBlock';
import { arrDressStyle } from '@/constants/arrDressStyle';
import Link from 'next/link';
import PriceFilter from './components/priceFilter';
import SizeFilter from './components/sizeFilter';
import ColorsFilter from './components/colorFilter';

export default function Home() {
    const allProducts = [
        ...activewearProducts,
        ...casualwearProducts,
        ...officewearProducts,
        ...partywearProducts,
        ...summerwearProducts,
        ...winterwearProducts
    ]

    const [chooseProducts, setChooseProducts] = useState<ClotheMainObjProps[]>([]);
    //const [firstChoProduct, setFirstChoProduct] = useState<number>(chooseProducts[0].id);
    //const [lastChoProduct, setLastChoProduct] = useState<number>(chooseProducts[chooseProducts.length - 1].id);

    const selectRandomProducts = () => {
        const shuffledProducts = [...allProducts];

        for (let i  = shuffledProducts.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [shuffledProducts[i], shuffledProducts[j]] = [shuffledProducts[j], shuffledProducts[i]]
        }

        setChooseProducts(shuffledProducts.slice(0, 9));
    }

    useEffect(() => {
        selectRandomProducts()
    }, []);

    return(
        <div className="flex flex-col justify-center bg-white px-[100px]">
            <main className="flex flex-col justify-between items-start bg-white gap-6">
                <div className="flex">
                    <h5 className="font-satoshi font-normal text-base leading-100 tracking-0 text-black/60">
                        Home {">"} 
                    </h5>
                </div>
                <div className="flex items-start justify-center gap-5 w-full h-auto">
                    <aside className="flex flex-col  items-start h-auto min-w-[295px] px-6 py-5 gap-6 border rounded-[20px] border-black/10 bg-">
                        <div className="flex justify-between items-center w-full">
                            <h2 className="font-satoshi font-bold text-xl leading-100 tracking-0 align-middle text-black">
                                Filters
                            </h2>
                            <TuneIcon 
                                className="w-6 h-6 text-black/40"
                            />
                        </div>
                        <hr 
                            className='w-full h-[1px] bg-black/10 border-0 my-2.5'
                        />
                        <div className="flex justify-center items-center flex-col gap-5 w-full">
                            {linksPageFilter.map((item) => (
                                <TextLinkPage 
                                    {...item}
                                />
                            ))}
                        </div>
                        <hr 
                            className='w-full h-[1px] bg-black/10 border-0 my-2.5'
                        />
                        <AccFuncBlock 
                            nameSection='Price'
                            reactComponent={
                                <PriceFilter />
                            }
                        />
                        <AccFuncBlock 
                            nameSection='Colors'
                            reactComponent={
                                <ColorsFilter />
                            }
                        />
                        <AccFuncBlock 
                            nameSection='Size'
                            reactComponent={
                                <SizeFilter />
                            }
                        />
                        <AccFuncBlock 
                            nameSection='Dress style'
                            reactComponent={
                                <div className="flex flex-col items-start gap-4">
                                    {arrDressStyle.map((style) => (
                                        <Link
                                            key={style.id}
                                            href={`/shop/${style.link}`}
                                            className="flex items-center justify-between w-full hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors"
                                        >
                                            <span className="font-satoshi text-base text-black/60">
                                                {style.title}
                                            </span>
                                            <span className="text-black/40">
                                                {'>'}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            }
                        />
                    </aside>
                    <section className="flex flex-col items-start w-full h-auto gap-4">
                        <div className='flex items-center justify-between w-full'>
                            <h2 className='font-satoshi font-bold text-[32px] leading-100 tracking-0 align-middle text-black'>
                                Products
                            </h2>
                            <div className='flex items-center justify-center gap-3'>
                                <h5 className='font-satoshi font-normal text-base leading-100 tracking-0 text-black/60'>
                                    //TODO: to finish func of calculation & add math's logic
                                    Showing {}-{} of {chooseProducts.length} products
                                </h5>
                                <div className='flex items-center justify-center gap-1'>
                                    <h5 className='font-satoshi font-normal text-base leading-100 tracking-0 text-black/60'>
                                        Sort by: 
                                    </h5>
                                    <div className='flex items-center justify-center gap-1'>
                                        <h4 className='font-satoshi font-bold text-base leading-100 tracking-0 text-black'>
                                            Most Popular
                                        </h4>
                                        <ExpandMoreIcon
                                            className='w-6 h-6 text-black/40'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-3 gap-[36px]'>
                            {chooseProducts.map((product) => (
                                <ClothesCard 
                                    key={product.id}
                                    {...product}
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}