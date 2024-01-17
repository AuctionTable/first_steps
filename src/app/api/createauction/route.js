import { getDataFromToken } from "@/helpers/tokenChecker";
import { connect } from "@/dbConfig/dbConfig";
import Auction from "@/model/auctionModel";
import User from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request){

    try {
        const userId = await getDataFromToken(request);
        console.log(userId);

        const reqBody = await request.json();

        const {title, description, price} = reqBody;
        const user = await User.findOne({_id: userId});

        const newAuction = new Auction({
            user: user._id,
            title: title,
            description: description,
            price: price,
        })

        
        const savedAuction = await newAuction.save();

        await user.auctions.push(savedAuction._id);
        await user.save()
        
        console.log(user);
        console.log(savedAuction);

        //await user.auctions.push[]
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