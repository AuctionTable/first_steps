"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { z } from 'zod';

export default function SignUpPage() {
    const schema = z.object({
        username: z.string(),
        email: z.string().email(),
        password: z.string().min(3, {
            message: 'Password must be at least 8 characters long.',
        }),
    });

    const router = useRouter();
    const [details, setDetails] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState(null); // State to hold validation errors
    const [loading, setLoading] = useState(false)

    const onSignUp = async (event) => {
        event.preventDefault();

        try {
            // Validate user inputs against the schema
            schema.parse(details);
        } catch (error) {
            setErrors(error.errors || [{ message: "Unexpected error occurred" }]);
            setTimeout(() => {
                setErrors(''); // Reset showErr to false after 200ms
            }, 3000);
            return; // Stop signup process if there are errors
        }

        try {
            setLoading(true)
            const response = await axios.post("/api/signup", details);
            console.log(response);
            router.push('/login');
        } catch (error) {
            console.log("Signup error:", error.response);
            setErrors(error.response ? [{ message: error.response.data.error }] : [{ message: "Unexpected error occurred" }]);
            setTimeout(() => {
                setErrors(''); // Reset showErr to false after 200ms
            }, 3000);
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <div className="relative w-[85%] sm:w-[26rem] md:w-[30rem] mx-auto mt-[4rem] p-[2rem] text-text bg-secondary rounded-lg">

                {errors && (
                    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-primary p-[1rem] rounded-md transition-all error">
                        <button className="absolute right-2 top-0" onClick={() => setErrors(null)}>x</button>
                        {errors.map((error, index) => (
                            <div key={index}>- {error.message}</div>
                        ))}
                    </div>
                )}

            {loading && (
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-primary p-[1rem] rounded-md transition-all error">
                    <div className="custom-loader"></div>
                </div>
            )}

                <h1 className="text-[2rem] text-center font-medium">Sign Up</h1>

                <form onSubmit={onSignUp} className="flex flex-col gap-[0.5rem]">
                    <label className="mt-[2rem]" htmlFor="username">Username</label>
                    <input
                        className="input-class"
                        type="text"
                        id="username"
                        placeholder="kmrsahil"
                        value={details.username}
                        onChange={(e) => setDetails({ ...details, username: e.target.value })}
                    />

                    <label className="mt-[1rem]" htmlFor="email">Email</label>
                    <input
                        className="input-class"
                        type="email"
                        id="email"
                        placeholder="user@gmail.com"
                        value={details.email}
                        onChange={(e) => setDetails({ ...details, email: e.target.value })}
                    />

                    <label className="mt-[1rem]" htmlFor="pass">Password</label>
                    <input
                        className="input-class"
                        type="password"
                        placeholder="Password"
                        value={details.password}
                        onChange={(e) => setDetails({ ...details, password: e.target.value })}
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
    );
}
