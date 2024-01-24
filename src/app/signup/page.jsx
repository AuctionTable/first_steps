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
            <div className="w-[85%] sm:w-[26rem] md:w-[30rem] mx-auto mt-[4rem] p-[2rem] text-text bg-secondary rounded-lg">
                <h1 className="text-[2rem] text-center font-medium">Sign Up</h1>

                <form onSubmit={onSignUp} className="flex flex-col gap-[0.5rem]">

                    <label className="mt-[2rem]" htmlFor="username">Username</label>
                    <input 
                    className="input-class"
                    type="text" 
                    id="username" 
                    placeholder="kmrsahil" 
                    value={details.username}
                    onChange={(e) => setDetails({...details, username: e.target.value})}
                    />

                    <label className="mt-[1rem]" htmlFor="email">Email</label>
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

                    <div className="text-sm text-center mt-[1rem]">Already have an account ? 
                            <a href="/login" className="underline underline-offset-2"> Login here</a>
                    </div>

                </form>
            </div>
        </>
    )
} 