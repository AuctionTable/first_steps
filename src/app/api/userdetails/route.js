import { getDataFromToken } from "@/helpers/tokenChecker";
import User from "@/model/userModel";
import Auction from "@/model/auctionModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request){

    try {
        const userId = await getDataFromToken(request);
        console.log(userId);
        const user = await User.findOne({_id: userId})
                        
        console.log(user);

        // Fetch auction details
        const auctionIds = user.auctions || [];
        let auctions
        if(auctionIds.length > 0){
            auctions = await Auction.find({ _id: { $in: auctionIds } });
        }
        
        return NextResponse.json({
            message: "User found",
            data: {
                user,
                auctions
            },
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

        return NextResponse.json({ error: error.message }, { status: 400 });
    }

}