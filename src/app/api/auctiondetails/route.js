import Auction from "@/model/auctionModel";
import User from "@/model/userModel";
import { NextResponse } from "next/server";

export async function POST(request){

    try {
        const reqBody = await request.json();
        const {auctionId} = reqBody;
        console.log(auctionId)

        const auctionDetails = await Auction.findOne({_id: auctionId})

        await auctionDetails.save();

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

        return NextResponse.json({ message: "Auction details fetching error", success: false, error: error.message }, { status: 500 });

    }

}