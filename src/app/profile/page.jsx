"use client"
import axios from "axios"
import Link from "next/link";
import { useEffect, useState } from "react"


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
    

    return(
        <>
        <h1>Profile</h1>
        <input className="w-[20%] text-text border-[2px] border-b-text mr-2" placeholder={userData.email}/>
        <input className="w-[20%] text-text border-[2px] border-b-text mr-2" placeholder={userData.username}/>
        <input className="w-[20%] text-text border-[2px] border-b-text mr-2" placeholder={userData.password}/>

        <button className="p-[0.5rem] bg-accent text-primary mr-2" onClick={onGetData}>Click</button>
        <Link className="p-[0.5rem] bg-accent text-primary mr-2" href="/createauction">Create your auction</Link>
        </>
    )
}