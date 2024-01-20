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
        const auctions = await Auction.find({ _id: { $in: auctionIds } });

        console.log(auctions);

        return NextResponse.json({
            message: "User found",
            data: {
                user,
                auctions,
            },
        })
        
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}