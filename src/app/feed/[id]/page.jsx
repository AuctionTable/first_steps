"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';

function AuctionIdPage() {
    const pathname = usePathname();
    const router = useRouter();

    const [sameOwner, setSameOwner] = useState(false);
    const [auctionData, setAuctionData] = useState('');
    const [bidDetails, setBidDetails] = useState({
        bidPrice: '',
        auctionId: '',
        bidderId: '',
    });
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setBidDetails((prevBidDetails) => ({
            ...prevBidDetails,
            auctionId: pathname.split('/')[2],
        }));
    }, [pathname]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const id = pathname.split('/')[2];
                const res = await axios.post("/api/auctiondetails", { auctionId: id });
                console.log(res)
                setAuctionData(res.data.data);
                
            } catch (error) {
                setErrors(error.message);
                setTimeout(() => {
                    setErrors(null);
                }, 3000);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        
    }, [pathname]);

    useEffect(() => {
        console.log(auctionData)
    },[auctionData])

    useEffect(() => {
        const verify = async () => {
            try {
                const response = await axios.get("/api/userdetails");
                const resAuction = response.data.data.user.auctions;
                if (resAuction.length > 0) {
                    const hasMatchingAuction = resAuction.includes(pathname.split('/')[2]);
                    setSameOwner(hasMatchingAuction);
                } else {
                    setSameOwner(false);
                }
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        verify();
    }, [pathname]);

    const onSubmit = async () => {
        setLoading(true);
        if (bidDetails.bidPrice <= auctionData.auctionDetails.price) {
            setErrors("Bidding amount should be greater than price");
            setTimeout(() => {
                setErrors(null);
            }, 3000);
            setLoading(false);
            return;
        }
        try {
            const res = await axios.post("/api/bid", bidDetails);
            setErrors("Bid placed successfully !");
            setTimeout(() => {
                setErrors(null);
            }, 3000);
        } catch (error) {
            setErrors(error);
            setTimeout(() => {
                setErrors(null);
            }, 3000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='relative w-[90%] sm:w-[80%] md:w-[40rem] lg:w-[48rem] xl:w-[58rem] mx-auto p-[1rem] sm:p-[2rem] flex items-center justify-start flex-wrap gap-[1rem]'>

            {errors && (
                <div className="z-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-primary p-[1rem] rounded-md transition-all error">
                    <button className="absolute right-2 top-0" onClick={()=> {setErrors(null)}}>x</button>
                    <div key="api-error">{errors}</div>
                </div>
            )}

            {loading && (
                <div className="z-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-primary p-[1rem] rounded-md transition-all error">
                    <div className="custom-loader"></div>
                </div>
            )}

            <h1 className="w-[100%] text-[2rem] text-center font-medium mt-[2rem]">Place your Bid</h1>

            {auctionData && (
                <div className='relative w-[85%] sm:w-[26rem] md:w-[30rem] mx-auto mt-[1rem] p-[2rem] text-text bg-secondary rounded-lg flex flex-col gap-[0.5rem]'>
                      <a className='absolute btn-primary bg-secondary text-accent outline-none py-[0.25rem] px-[0.75rem] rounded-lg right-0 -top-[3.4rem]' href="/feed">x</a>
                      <h1 className='text-[1.5rem] font-bold'>{auctionData.auctionDetails?.title}</h1>
                      <p className='text-lg'>{auctionData.auctionDetails?.description}</p>
                      <span className='text-accent font-bold text-[1.8rem] mt-[1rem]'>₹ {auctionData.auctionDetails?.price}</span>

                      {sameOwner ? null : (
                        <>
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
                        </>
                      )}
                    </div>
                )}

            <div className='w-[85%] sm:w-[26rem] md:w-[30rem] mx-auto mt-[1rem] p-[2rem] text-text bg-secondary rounded-lg flex flex-col gap-[0.5rem]'>
                {auctionData.auctionDetails?.bidders?.map((bidder) => (
                    <p key={bidder._id} className='text-lg'>
                        {bidder.user.substring(0, 5)} bidded at {bidder.biddedAmount}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default AuctionIdPage;
