import Auction from "@/model/auctionModel";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        
        const reqBody = await request.json();
        const { bidPrice, auctionId } = reqBody; // Destructuring bidPrice and auctionId from reqBody

        console.log("Bid Price:", bidPrice);
        console.log("Auction ID:", auctionId);

        const auction = await Auction.findOne({_id: auctionId})

        auction.price = bidPrice;
        await auction.save();

        // Add logic for updating the bid in the database if needed

        return NextResponse.json({ message: "Bid updated successfully", success: true });

    } catch (error) {
        return NextResponse.json({ message: "Bid not updated", success: false, error: error.message }, { status: 500 });
    }
}