import Auction from "@/model/auctionModel";
import User from "@/model/userModel";
import { NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/tokenChecker";

export async function POST(request){
    try {
        
        const reqBody = await request.json();
        const { bidPrice, auctionId } = reqBody; // Destructuring bidPrice and auctionId from reqBody

        console.log("Bid Price:", bidPrice);
        console.log("Auction ID:", auctionId);

        const userId = await getDataFromToken(request);
        console.log(userId);

        const user = await User.findOne({_id: userId})

        const auction = await Auction.findOne({_id: auctionId})

        auction.price = bidPrice;
        await auction.bidders.push(user._id)

        await auction.save();

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