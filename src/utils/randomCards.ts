"use client"

import { useEffect, useState } from "react";
import React from "react";

import { ClotheObjProps } from "@/types/typeClotheCard";
import { arrShirtsObjs } from "@/constants/cardsMainObj/arrShirtsObjs";
import { arrJeansObjs } from "@/constants/cardsMainObj/arrJeansObjs";
import { arrShortsObj } from "@/constants/cardsMainObj/arrShortsObjs";
import { arrTshirtsObjs } from "@/constants/cardsMainObj/arrTshirtsObjs";



export default function useRandomCards(sectionType: "new" | "top") {
    const [randomCards, setRandomCards] = useState<ClotheObjProps[]>([]);
    const allCards: ClotheObjProps[] = [arrShirtsObjs, arrJeansObjs, arrShortsObj, arrTshirtsObjs].flat(2);

    const getRandomCard = () => {
        const sortedArray = allCards.sort(() => 0.5 - Math.random());
        const slicedArray = sortedArray.slice(0, 4);

        setRandomCards(slicedArray);
    }

    useEffect(() => {
        getRandomCard()
    }, []);

    return {
        randomCards,
        getRandomCard
    }
}