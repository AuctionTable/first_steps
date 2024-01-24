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
        <div className="w-[100%] sm:w-[80%] md:w-[32rem] lg:w-[45rem] mx-auto p-[1rem] sm:p-[2rem] flex flex-col gap-[1rem]">
            <h1 className="text-[1.5rem] text-center font-medium">Profile</h1>

            <div className="w-[100%] flex flex-wrap gap-[1rem]">    
                <input className="w-[100%] sm:w-[48%] lg:w-[29%] flex-grow input-class" placeholder={userData.user?.email}/>
                <input className="w-[100%] sm:w-[48%] lg:w-[29%] flex-grow input-class" placeholder={userData.user?.username}/>
                <input className="w-[100%] sm:w-[48%] lg:w-[29%] flex-grow input-class" placeholder={userData.user?.password}/>
            </div>

            <button className="md:w-[18rem] md:mx-auto btn-primary" onClick={onGetData}>Click</button>

            <hr className="w-[100%] my-[1rem] opacity-20"/>

            <div className='flex flex-col sm:flex-row flex-wrap gap-[1rem] items-center justify-center'>
                <h1 className="w-[100%] text-center">All auctions you posted</h1>
                {Array.isArray(userData.auctions) && userData.auctions.map((post, key) => (
                        <Cards key={key} details={post} />
                    ))}
            </div>

            <Link className="mt-[1rem] md:w-[18rem] md:mx-auto btn-primary" href="/createauction">Create auction</Link>

            <hr className="w-[100%] my-[1rem] opacity-20"/>

            <button className="mt-[1rem] md:w-[18rem] md:mx-auto btn-primary bg-secondary text-accent outline-accent">Logout</button>
        </div>
    )
}