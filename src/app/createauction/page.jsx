"use client"
import axios from "axios"
import { useState } from "react"
export default function CreateAuction(){

    const[details, setDetails] = useState({
        title: "",
        description: "",
        price: "",
    })

    const onCreate = async() => {
        try {
            const response = await axios.post("/api/createauction", details);
            console.log(response)
        } catch (error) {
            console.log("create error:", error.response.data.error);
        }
    }

    return(
        <div className="w-[90%] sm:w-[80%] md:w-[32rem] lg:w-[45rem] mx-auto p-[1rem] sm:p-[2rem] flex flex-col gap-[1rem]">

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