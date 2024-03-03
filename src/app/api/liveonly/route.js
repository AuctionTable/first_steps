import { connect } from "@/dbConfig/dbConfig";
import Auction from "@/model/auctionModel";
import { NextResponse } from "next/server";

export const revalidate = 0; // this is the new line added

connect();

export async function GET(request){
    try {

            const today = new Date().getTime();
            const posts = await Auction.find({
                $and: [
                    { endDate: { $gte: today } },
                    { isOpen: false } // Directly check if isOpen is true
                ]
            })
            console.log(posts)

            return NextResponse.json({
                message: "Posts found",
                data: posts,
            }, { headers: { 'Cache-Control': 'no-cache' } })
        

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

        return NextResponse.json({ message: "Auction fetching failed", error: error.message }, { status: 400 });
    }
}