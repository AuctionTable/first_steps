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
            <div className="w-[85%] sm:w-[26rem] md:w-[30rem] mx-auto mt-[4rem] p-[2rem] text-text bg-secondary rounded-lg">
                <h1 className="text-[2rem] text-center font-medium">Log in</h1>

                <form onSubmit={onLogin} className="flex flex-col gap-[0.5rem]">
                    
                    <label className="mt-[2rem]" htmlFor="email">Email</label>
                    <input 
                    className="input-class"
                    type="email" 
                    id="email" 
                    placeholder="user@gmail.com"
                    value={details.email}
                    onChange={(e) => setDetails({...details, email: e.target.value})}
                    />

                    <label className="mt-[1rem]" htmlFor="pass">Password</label>
                    <input 
                    className="input-class" 
                    type="password" 
                    placeholder="Password"
                    value={details.password}
                    onChange={(e) => setDetails({...details, password: e.target.value})}
                    />

                    <button 
                        type="submit"
                        className="mt-[1rem] btn-primary">
                        Submit
                    </button>

                    <div className="text-sm text-center mt-[1rem]">Don't have a account ? 
                            <a href="/signup" className="underline underline-offset-2"> Signup here</a>
                    </div>

                </form>
            </div>
        </>
    )
} 