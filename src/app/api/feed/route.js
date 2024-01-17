import { connect } from "@/dbConfig/dbConfig";
import Auction from "@/model/auctionModel";
import { NextResponse } from "next/server";

connect();

export async function GET(request){
    try {

        const posts = await Auction.find()
        console.log(posts)

        return NextResponse.json({
            message: "Posts found",
            data: posts,
        })

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}