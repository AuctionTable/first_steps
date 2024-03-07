"use client"
import axios from "axios"
import Link from "next/link";
import { useEffect, useState } from "react"
import Cards from '@/components/Cards';
import { useRouter } from "next/navigation";


export default function ProfilPage() {

    const router = useRouter()
    const [userData, setUserData] = useState({});
    const [key, setKey] = useState('')

    const [errors, setErrors] = useState(null); // State to hold validation errors
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const onGetData = async() => {
            try {
                setLoading(true)
                const response = await axios.get("/api/userdetails");
                setUserData(response.data.data);
                console.log(userData);
            } catch (error) {
                setErrors(error)
                console.log("Profile error:", error.response.data.error);
                setTimeout(() => {
                    setErrors(''); // Reset showErr to false after 200ms
                }, 3000);
            } finally {
                setLoading(false)
            }
        }

        onGetData()
    },[])

    const onLogout = async () => {
        try {
            setLoading(true)
            setKey('key')
            const response = await axios.post("/api/logout", {key});
            console.log(response)
            router.push("/login")
        } catch (error) {
            setErrors(error)
            console.log("Logout error:", error.response.data.error);
            setTimeout(() => {
                setErrors(''); // Reset showErr to false after 200ms
            }, 3000);
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        console.log(userData)
    },[userData])

    return(
        <div className="relative w-[100%] sm:w-[80%] md:w-[32rem] lg:w-[45rem] mx-auto p-[1rem] sm:p-[2rem] flex flex-col gap-[1rem]">

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

            <a className='absolute btn-primary bg-secondary text-accent outline-none py-[0.25rem] px-[0.75rem] rounded-lg left-[1.75rem]' href="/feed">←</a>

            <h1 className="text-[1.5rem] text-center font-medium">Profile</h1>

            {userData && (<div className="w-[100%] flex flex-wrap gap-[1rem]">    
                <input className="w-[100%] sm:w-[48%] lg:w-[29%] flex-grow input-class" placeholder={userData.user?.email}/>
                <input className="w-[100%] sm:w-[48%] lg:w-[29%] flex-grow input-class" placeholder={userData.user?.username}/>
                <input className="w-[100%] sm:w-[48%] lg:w-[29%] flex-grow input-class" placeholder={userData.user?.password}/>
            </div>)}

            <hr className="w-[100%] my-[1rem] opacity-20"/>

            <div className='flex flex-col sm:flex-row flex-wrap gap-[1rem] items-center justify-center'>
                <h1 className="w-[100%] text-center">All auctions you posted</h1>
                {Array.isArray(userData.auctions) && userData.auctions.map((post, key) => (
                        <Cards key={key} details={post} />
                    ))}
            </div>

            <Link className="mt-[1rem] md:w-[18rem] md:mx-auto btn-primary" href="/createauction">Create auction</Link>

            <hr className="w-[100%] my-[1rem] opacity-20"/>

            <button className="mt-[1rem] md:w-[18rem] md:mx-auto btn-primary bg-secondary text-accent outline-accent"
                    onClick={onLogout}
            >Logout</button>
        </div>
    )
}