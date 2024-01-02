import { getDataFromToken } from "@/helpers/tokenChecker";
import User from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request){

    try {
        const userId = await getDataFromToken(request);
        console.log(userId);
        const user = await User.findOne({_id: userId});
        
        console.log(user);

        return NextResponse.json({
            message: "User found",
            data: user,
        })
        
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}