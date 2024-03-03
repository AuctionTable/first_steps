import mongoose from "mongoose"

const auctionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    title: String,
    description: String,
    price: Number,
    startDate: Date,
    endDate: Date,
    isOpen: Boolean,
    bidders: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
        biddedAmount: Number,
    }]
})

const Auction = mongoose.models.auctions || mongoose.model("auctions", auctionSchema);

export default Auction