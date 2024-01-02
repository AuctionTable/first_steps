"use client"
import axios from "axios"
import { useEffect, useState } from "react"


export default function ProfilPage() {

    const [userData, setUserData] = useState({});

    const onGetData = async() => {
        try {
            const response = await axios.get("/api/userdetails");
            setUserData(response.data.data);
            console.log(userData);
        } catch (error) {
            console.log("Login error:", error.response.data.error);
        }
    }
    

    return(
        <>
        <h1>Profile</h1>
        <input className="w-[20%] text-text" placeholder={userData.email}/>
        <input className="w-[20%] text-text" placeholder={userData.username}/>
        <input className="w-[20%] text-text" placeholder={userData.password}/>

        <button onClick={onGetData}>Click</button>
        </>
    )
}