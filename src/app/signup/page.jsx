"use client"
import { useState } from "react"
import axios from "axios"

export default function SignUpPage(){

    const[details, setDetails] = useState({
        username: "",
        email: "",
        password: "",
    })

    const onSignUp = async (event) => {

        event.preventDefault();
        console.log(details)
        try {
            const response = await axios.post("/api/signup", details)
            console.log(response)
        } catch (error) {
            console.log("Signup error:", error.response.data.error);
        }
    }

    return(
        <>
            <div className="w-[50%] mx-auto mt-[4rem] p-[2rem] text-text bg-secondary">
                <h1 className="text-[2rem]">Sign Up</h1>

                <form onSubmit={onSignUp} className="flex flex-col gap-[1rem]">
                    <label htmlFor="username">Username</label>
                    <input 
                    className="outline outline-2 outline-text outline-offset-2 p-[0.5rem] rounded-md bg-text bg-opacity-10"
                    type="text" 
                    id="username" 
                    placeholder="kmrsahil" 
                    value={details.username}
                    onChange={(e) => setDetails({...details, username: e.target.value})}
                    />

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