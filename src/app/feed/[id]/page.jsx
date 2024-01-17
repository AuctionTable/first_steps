"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function page({ params }) {

    const [auctionData, setAuctionData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {

                const id = window.location.href.split('/').pop();
                console.log(id)
                
                const res = await axios.post("/api/auctiondetails", { auctionId: id });
                setAuctionData(res.data.data);
    
            } catch (error) {
                console.log("API Error:", error.message);
            } 
        };

        fetchData();
    }, []);

    console.log(auctionData)

  return (
    <div className='p-[2rem] flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-bold'>{auctionData.title}</h1>
        <p className='text-lg'>{auctionData.description}</p>
        <span className='font-bold text-xl'>$ {auctionData.price}</span>
        <input type="number" className='border-2 border-b-text' placeholder='enter the bidding amount'/>
        <button className='bg-accent px-[1rem] py-[0.5rem]'>Place Bid</button>
    </div>
  )
}

export default page