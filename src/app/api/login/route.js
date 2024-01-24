import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

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

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        }

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1d"});

        const response = NextResponse.json({
            message: "Succesfully login",
            success: true,
        })


        response.cookies.set("token", token, {
            httpOnly: true,
        })


        return response;

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

        return NextResponse.json({ message: "Login Failed", error: error.message }, { status: 500 });
    }
}