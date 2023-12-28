"use client"
import { useState } from "react"
import axios from "axios"

export default function LoginPage(){

    const[details, setDetails] = useState({
        email: "",
        password: "",
    })

    const onLogin = async (event) => {

        event.preventDefault();
        console.log(details)
        try {
            const response = await axios.post("/api/login", details)
            console.log(response)
        } catch (error) {
            console.log("Login error:", error.response.data.error);
        }
    }

    return(
        <>
            <div className="w-[50%] mx-auto mt-[4rem] p-[2rem] text-text bg-secondary">
                <h1 className="text-[2rem]">Sign Up</h1>

                <form onSubmit={onLogin} className="flex flex-col gap-[1rem]">
                    
                    <label htmlFor="email">Email</label>
                    <input 
                    className="outline outline-2 outline-text outline-offset-2 p-[0.5rem] rounded-md bg-text bg-opacity-10"
                    type="email" 
                    id="email" 
                    placeholder="user@gmail.com"
                    value={details.email}
                    onChange={(e) => setDetails({...details, email: e.target.value})}
                    />

                    <label htmlFor="pass">Password</label>
                    <input 
                    className="outline outline-2 outline-text outline-offset-2 p-[0.5rem] rounded-md bg-text bg-opacity-10" 
                    type="password" 
                    placeholder="Password"
                    value={details.password}
                    onChange={(e) => setDetails({...details, password: e.target.value})}
                    />

                    <button 
                        type="submit"
                        className="outline outline-2 outline-text outline-offset-2 p-[0.5rem] rounded-md bg-accent text-primary font-bold">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
} 