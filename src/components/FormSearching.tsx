'use client'

import Form from 'next/form';
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function FormSearching() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Searching process: ', searchTerm);
    }
    return(
        <Form 
            action="/search"
            className="relative flex items-center"
            onSubmit={handleSubmit}
        >
            <IoSearch 
                className="absolute left-3 w-5 h-5 text-[#00000066]"
            />
            <input  
                type="text"
                value={searchTerm}
                className="py-2 pl-10 pr-4 w-[577px] h-12 border rounded-full outline-none bg-[#F0F0F0]"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for products..."
            />
        </Form>
    )
}