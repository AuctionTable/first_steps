import Auction from "@/model/auctionModel";
import { NextResponse } from "next/server";

export async function POST(request){

    try {
        const reqBody = await request.json();
        const {auctionId} = reqBody;
        console.log(auctionId)

        const auctionDetails = await Auction.findOne({_id: auctionId})

        return NextResponse.json({
            message: "Fetched",
            data: auctionDetails
        })
    } catch (error) {
        return NextResponse.json({ message: "Auction details fetching error", success: false, error: error.message }, { status: 500 });
    }

}