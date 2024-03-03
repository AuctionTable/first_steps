import Auction from "@/model/auctionModel";
import User from "@/model/userModel";
import { NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/tokenChecker";

export async function POST(request){
    try {
        
        const reqBody = await request.json();
        const { bidPrice, auctionId, bidderId } = reqBody; // Destructuring bidPrice and auctionId from reqBody

        console.log("Bid Price:", bidPrice);
        console.log("Auction ID:", auctionId);

        const userId = await getDataFromToken(request);
        console.log(userId + "isSame" + bidderId);

        const user = await User.findOneAndUpdate({_id: userId},{
            $push: {biddedAuction: {
                auctionId: auctionId,
                biddedAmount: bidPrice,
            }}
        }, {new: true})

        const auction = await Auction.findOneAndUpdate({_id: auctionId},{
            $set: {price: bidPrice},
            $push: {bidders: {
                user: userId,
                biddedAmount: bidPrice,
            }}
        }, { new: true })

        // Add logic for updating the bid in the database if needed

        return NextResponse.json({ message: "Bid updated successfully", success: true });

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

        return NextResponse.json({ message: "Bid not updated", success: false, error: error.message }, { status: 500 });
    }
}