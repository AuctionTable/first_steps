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
        startDate: "",
        endDate: "",
    })

    const onCreate = async() => {
        console.log(details)
        try {
            
            const response = await axios.post("/api/createauction", details);
            console.log(response)
            router.push('/feed')
        } catch (error) {
            console.log("create error:", error.response.data.error);
        }
    }

    return(
        <div className="relative w-[90%] sm:w-[80%] md:w-[32rem] lg:w-[45rem] mx-auto p-[1rem] sm:p-[2rem] flex flex-col flex-wrap gap-[1rem]">

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

            <div className="flex flex-col gap-[0.25rem] w-[30%]">
            <label htmlFor="startDate">Start Date of the auction</label>
            <input type="date"
               id="startDate" 
               className="input-class"
               onChange={(e) => setDetails({...details, startDate: e.target.value})}
               min={new Date().toISOString().split('T')[0]}
               />
            </div>

            <div className="flex flex-col gap-[0.25rem] w-[30%]">
            <label htmlFor="endDate">End Date of the auction</label>
            <input type="date"
               id="endDate" 
               className="input-class"
               onChange={(e) => setDetails({...details, endDate: e.target.value})}
               min={details.startDate ? (new Date(new Date(details.startDate).getTime() + 86400000)).toISOString().split('T')[0] : ''}
               />
            </div>


            
            <button className="mt-[1rem] md:w-[18rem] md:mx-auto btn-primary" onClick={onCreate}>Submit</button>
        </div>
    )
}