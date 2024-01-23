import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import {  NextResponse } from "next/server";

connect();

export async function POST(request){

    try {
        const reqBody = await request.json();
        const {username, email, password} = reqBody;
        

        const user = await User.findOne({email});
        console.log(user)

        if(user) {
            
            return NextResponse.json({error: "User already exist"}, {status: 400})
        }

        const newUser = new User({
            username: username,
            email: email,
            password: password,
        })

        const savedUser = await newUser.save();
        

        return NextResponse.json({
            message: "User saved",
            success: true,
            savedUser,
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

        return NextResponse.json({ message: "SignUp Failed", error: error.message }, { status: 500 });
        
    }
}