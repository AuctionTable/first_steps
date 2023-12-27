import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import {  NextResponse } from "next/server";

connect();

export async function POST(request){

    try {
        const reqBody = await request.json();
        const {username, email, password} = reqBody;
        console.log("here1")

        const user = await User.findOne({email});
        console.log(user)

        if(user) {
            console.log("here4")
            return NextResponse.json({error: "User already exist"}, {status: 400})
        }

        console.log("here2")

        const newUser = new User({
            username: username,
            email: email,
            password: password,
        })

        const savedUser = await newUser.save();
        console.log("here3")

        return NextResponse.json({
            message: "User saved",
            success: true,
            savedUser,
        })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
        
    }
}