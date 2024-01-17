"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function page({ params }) {

    const [auctionData, setAuctionData] = useState(null);

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

  return (
    <div>
        details
    </div>
  )
}

export default page