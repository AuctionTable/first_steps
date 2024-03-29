import { NextResponse } from "next/server";

export async function POST(request){
    try {
        
        const reqBody = request.json();
        const {key} = reqBody
        console.log(key)

        const response = NextResponse.json({
            message: "Logout Successfull",
            success: true,
        })

        response.cookies.set("token", "",
        {
            httpOnly: true,
            expires: new Date(0),
        })

        return response;
        
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}