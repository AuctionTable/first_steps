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
        return NextResponse.json({ error: error.message }, { status: 500 });
        
    }
}