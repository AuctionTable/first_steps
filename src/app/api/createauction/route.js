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

        const {title, description, price, startDate, endDate} = reqBody;

        const currentDate = new Date();
        const auctionStartDate = new Date(startDate);
        const auctionEndDate = new Date(endDate);
        const isOpen = currentDate >= auctionStartDate && currentDate <= auctionEndDate;

        const user = await User.findOne({_id: userId});

        // add here function to check if todays date is greater than equal start & less than equal to end date then make isOpen true else false

        const newAuction = new Auction({
            user: user._id,
            title: title,
            description: description,
            price: price,
            startDate: startDate,
            endDate: endDate,
            isOpen: isOpen,
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
        console.log(error.message);

        if (error.message === "jwt expired") {
            // Clear the "token" cookie by setting it with an expiration date in the past
            const response = NextResponse.json(
                { error: "Token expired. Please log in again." },
                { status: 400 }
            );
            response.cookies.set("token", "", { expires: new Date(0) });
            return response;
        }

        return NextResponse.json({ message: "Auction creation failed", success: false, error: error.message }, { status: 500 });
    }

}