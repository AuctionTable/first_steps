import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import { NextResponse } from "next/server";

connect();

export async function POST(request){

    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;

        const user = await User.findOne({email});

        if(!user) {
            return NextResponse.json({error: "User not exist"}, {status: 400})
        }

        if(user.password != password){
            return NextResponse.json({error: "Inavlid Password"}, {status: 400})
        }

        const response = NextResponse.json({
            message: "Succesfully login",
            success: true,
        })


        response.cookies.set("token", 12578, {
            httpOnly: true,
        })


        return response;

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}