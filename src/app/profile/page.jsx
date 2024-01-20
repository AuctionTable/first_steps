"use client"
import axios from "axios"
import Link from "next/link";
import { useEffect, useState } from "react"
import Cards from '@/components/Cards';


export default function ProfilPage() {

    const [userData, setUserData] = useState({});

    const onGetData = async() => {
        try {
            const response = await axios.get("/api/userdetails");
            setUserData(response.data.data);
            console.log(userData);
        } catch (error) {
            console.log("Profile error:", error.response.data.error);
        }
    }
    
    useEffect(() => {
        console.log(userData)
    },[userData])

    return(
        <>
        <h1>Profile</h1>
        <input className="w-[20%] text-text border-[2px] border-b-text mr-2" placeholder={userData.email}/>
        <input className="w-[20%] text-text border-[2px] border-b-text mr-2" placeholder={userData.username}/>
        <input className="w-[20%] text-text border-[2px] border-b-text mr-2" placeholder={userData.password}/>

        <button className="p-[0.5rem] bg-accent text-primary mr-2" onClick={onGetData}>Click</button>
        <Link className="w-[10rem] p-[0.5rem] bg-accent text-primary mr-2 block" href="/createauction">Create your auction</Link>

        <div className='flex flex-wrap gap-5 items-center justify-center p-[2rem]'>
            <h1 className="">All posts</h1>
            {Array.isArray(userData.auctions) && userData.auctions.map((post, key) => (
                    <Cards key={key} details={post} />
                ))}
        </div>
        </>
    )
}