"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function AuctionIdPage({ params }) {

    const [auctionData, setAuctionData] = useState('');
    const [bidDetails, setBidDetails] = useState({
        bidPrice: '',
        auctionId: '',
    });

    useEffect(() => {
        // Set auctionId using window.location.href.split('/').pop() on the client side
        setBidDetails((prevBidDetails) => ({
            ...prevBidDetails,
            auctionId: window.location.href.split('/').pop(),
        }));
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    useEffect(() => {
        const fetchData = async () => {
            try {
                const id = window.location.href.split('/').pop();
                console.log(id);

                const res = await axios.post("/api/auctiondetails", { auctionId: id });
                setAuctionData(res.data.data);
            } catch (error) {
                console.log("API Error:", error.message);
            }
        };

        fetchData();
    }, []);

    const onSubmit = async () => {
        try {
            const res = await axios.post("/api/bid", bidDetails);
            console.log(res);
        } catch (error) {
            console.log("Bid API Error:", error.message);
        }
    };

    console.log(auctionData)

    return (
<div className='p-[2rem] flex flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-bold'>{auctionData.auctionDetails?.title}</h1>
        <p className='text-lg'>{auctionData.auctionDetails?.description}</p>
        <span className='font-bold text-xl'>$ {auctionData.auctionDetails?.price}</span>

        <input
            type="number"
            className='border-2 border-b-text'
            placeholder='enter the bidding amount'
            value={bidDetails.bidPrice}
            onChange={(e) => setBidDetails({ ...bidDetails, bidPrice: e.target.value })}
        />
        <button
            className='bg-accent px-[1rem] py-[0.5rem]'
            onClick={onSubmit}
        >
            Place Bid
        </button>
        

        {auctionData.bidders?.map((bidder) => (
            <p key={bidder._id} className='text-lg'>
                Bidder: {bidder.username}
            </p>
        ))}
    </div>
    );
}

export default AuctionIdPage;