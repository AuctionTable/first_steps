import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import {  NextResponse } from "next/server";
import { z } from 'zod';

connect();

const signupSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(3)
})

export async function POST(request){

    try {
        const reqBody = await request.json();
        const {username, email, password} = reqBody;
        
        const {success} = signupSchema.safeParse(reqBody)

        if(!success) {
            return NextResponse.json({message: "Invalid Input"}, {status: 400})
        }

        const user = await User.findOne({email});

        if(user) {
            
            return NextResponse.json({message: "User already exist"}, {status: 400})
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