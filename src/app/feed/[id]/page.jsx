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
        <>

        <h1 className="text-[2rem] text-center font-medium mt-[2rem]">Place your Bid</h1>

        <div className='relative w-[85%] sm:w-[26rem] md:w-[30rem] mx-auto mt-[1rem] p-[2rem] text-text bg-secondary rounded-lg flex flex-col gap-[0.5rem]'>
            <a className='absolute btn-primary bg-secondary text-accent outline-none py-[0.25rem] px-[0.75rem] rounded-lg right-0 -top-[3.4rem]' href="/feed">x</a>
            <h1 className='text-[1.5rem] font-bold'>{auctionData.auctionDetails?.title}</h1>
            <p className='text-lg'>{auctionData.auctionDetails?.description}</p>
            <span className='text-accent font-bold text-[1.8rem] mt-[1rem]'>₹ {auctionData.auctionDetails?.price}</span>

            <input
                type="number"
                className='input-class mt-[1rem]'
                placeholder='enter the bidding amount'
                value={bidDetails.bidPrice}
                onChange={(e) => setBidDetails({ ...bidDetails, bidPrice: e.target.value })}
            />
            <button
                className='btn-primary my-[1rem]'
                onClick={onSubmit}
            >
                Place Bid
            </button>

        </div>

        <div className='w-[85%] sm:w-[26rem] md:w-[30rem] mx-auto mt-[1rem] p-[2rem] text-text bg-secondary rounded-lg flex flex-col gap-[0.5rem]'>
        {auctionData.bidders?.map((bidder) => (
                <p key={bidder._id} className='text-lg'>
                    Bidder: {bidder.username}
                </p>
        ))}
        </div>
        

        </>
    );
}

export default AuctionIdPage;