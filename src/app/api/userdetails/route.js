import { getDataFromToken } from "@/helpers/tokenChecker";
import User from "@/model/userModel";

export default async function GET(request){

    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId.id});

        return NextResponse.json({
            message: "User found",
            data: user,
        })
        
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}