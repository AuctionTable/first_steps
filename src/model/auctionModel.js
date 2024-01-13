import mongoose from "mongoose"

const auctionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: user,
    },
    title: String,
    description: String,
    price: Number,
})

const Auctions = mongoose.models.auctions || mongoose.model("auctions", auctionSchema);

export default Auctions