import Auction from "@/model/auctionModel";
import User from "@/model/userModel";
import { NextResponse } from "next/server";

export async function POST(request){

    try {
        const reqBody = await request.json();
        const {auctionId} = reqBody;
        console.log(auctionId)

        const auctionDetails = await Auction.findOne({_id: auctionId})

        const biddersId = auctionDetails.bidders || [];
        const bidders = await User.find({ _id: { $in: biddersId } })

        return NextResponse.json({
            message: "Fetched",
            data: {
                auctionDetails,
                bidders,
            }
        })
    } catch (error) {
        return NextResponse.json({ message: "Auction details fetching error", success: false, error: error.message }, { status: 500 });
    }

}