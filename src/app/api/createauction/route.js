import { getDataFromToken } from "@/helpers/tokenChecker";
import { connect } from "@/dbConfig/dbConfig";
import Auction from "@/model/auctionModel";
import User from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request){

    try {
        console.log("here 0")
        const userId = await getDataFromToken(request);
        console.log(userId);
        console.log("here 1")
        const reqBody = await request.json();
        console.log("here 2")
        const {title, description, price} = reqBody;
        const user = await User.findOne({_id: userId});
        console.log("here 3")

        const newAuction = new Auction({
            user: user._id,
            title: title,
            description: description,
            price: price,
        })
        console.log("here 4")
        const savedAuction = await newAuction.save();
        
        console.log(user);
        console.log("here 5")
        return NextResponse.json({
            message: "Auction Created",
            success: true,
            savedAuction,
        })
        
    } catch (error) {
        return NextResponse.json({ message: "Auction creation failed", success: false, error: error.message }, { status: 500 });
    }

}