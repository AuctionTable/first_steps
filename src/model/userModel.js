import mongoose, { mongo } from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    email: {
        type: String,
        required : [true, "Please provide a email"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    auctions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "auctions",
    }],
    biddedAuction: [{
        auctionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "auction",
        },
        biddedAmount: Number,
    }]
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User