import mongoose from "mongoose"

const auctionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    title: String,
    description: String,
    price: Number,
})

const Auction = mongoose.models.auctions || mongoose.model("auctions", auctionSchema);

export default Auction