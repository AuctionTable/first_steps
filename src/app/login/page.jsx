"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/navigation";
import { z } from 'zod';

export default function LoginPage(){

    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(3, {
            message: 'Password must be at least 8 characters long.',
        }),
    });

    const router = useRouter();
    const [details, setDetails] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState(null); // State to hold validation errors
    const [loading, setLoading] = useState(false)

    const onLogin = async (event) => {

        event.preventDefault();

        try {
            // Validate user inputs against the schema
            schema.parse(details);
            setErrors(null); // Clear any previous errors
        } catch (error) {
            setErrors(error.errors); // Set validation errors
            setTimeout(() => {
                setErrors(''); // Reset showErr to false after 200ms
            }, 3000);
            return; // Stop login process if there are errors
        }

        console.log(details)
        try {
            setLoading(true)
            const response = await axios.post("/api/login", details)
            console.log(response)
            router.push("/profile")
        } catch (error) {
            console.log("Login error:", error.response);
            setErrors(error)
            setTimeout(() => {
                setErrors(''); // Reset showErr to false after 200ms
            }, 3000);
        } finally {
            setLoading(false)
        }
    }

    return(
        <>
            <div className="relative w-[85%] sm:w-[26rem] md:w-[30rem] mx-auto mt-[4rem] p-[2rem] text-text bg-secondary rounded-lg">

            {errors && (
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-primary p-[1rem] rounded-md transition-all error">
                    <button className="absolute right-2 top-0" onClick={()=> {setErrors(null)}}>x</button>
                    {Array.isArray(errors) ? errors.map((error, index) => (
                        <div key={index}>- {error.message}</div>
                    )) : (
                        <div key="api-error">{errors.response.data.error}</div>
                    )}
                </div>
            )}

            {loading && (
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-primary p-[1rem] rounded-md transition-all error">
                    <div className="custom-loader"></div>
                </div>
            )}

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
