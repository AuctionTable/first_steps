"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
export default function CreateAuction(){

    const router  = useRouter();
    const[details, setDetails] = useState({
        title: "",
        description: "",
        price: "",
    })

    const onCreate = async() => {
        try {
            const response = await axios.post("/api/createauction", details);
            console.log(response)
            router.push('/feed')
        } catch (error) {
            console.log("create error:", error.response.data.error);
        }
    }

    return(
        <div className="relative w-[90%] sm:w-[80%] md:w-[32rem] lg:w-[45rem] mx-auto p-[1rem] sm:p-[2rem] flex flex-col gap-[1rem]">

            <a className='absolute btn-primary bg-secondary text-accent outline-none py-[0.25rem] px-[0.75rem] rounded-lg left-[1.75rem]' href="/feed">←</a>

            <h1 className="text-[1.5rem] text-center font-medium">Create Auction</h1>

            <input type="text"
                   className="input-class" 
                   placeholder="Title of the Auction"
                   value={details.title}
                   onChange={(e) => setDetails({...details, title: e.target.value})}
                   />
            <textarea rows="2" 
                      className="input-class"
                      placeholder="enter desc"
                      value={details.description}
                      onChange={(e) => setDetails({...details, description: e.target.value})}
                      ></textarea>
            <input type="number" 
                   className="input-class"
                   placeholder="enter price"
                   value={details.price}
                   onChange={(e) => setDetails({...details, price: e.target.value})}
                   />
            <button className="mt-[1rem] md:w-[18rem] md:mx-auto btn-primary" onClick={onCreate}>Submit</button>
        </div>
    )
}