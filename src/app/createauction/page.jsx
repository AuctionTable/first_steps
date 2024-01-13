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
        <>
            <input type="text"
                   className="w-[20%] text-text border-[2px] border-b-text mr-2" 
                   placeholder="Title of the Auction"
                   value={details.title}
                   onChange={(e) => setDetails({...details, title: e.target.value})}
                   />
            <textarea rows="2" 
                      className="w-[20%] text-text border-[2px] border-b-text mr-2"
                      placeholder="enter desc"
                      value={details.description}
                      onChange={(e) => setDetails({...details, description: e.target.value})}
                      ></textarea>
            <input type="number" 
                   className="w-[20%] text-text border-[2px] border-b-text mr-2"
                   placeholder="enter price"
                   value={details.price}
                   onChange={(e) => setDetails({...details, price: e.target.value})}
                   />
            <button className="p-[0.5rem] bg-accent text-primary" onClick={onCreate}>Submit</button>
        </>
    )
}