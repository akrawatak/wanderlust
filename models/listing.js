const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/a-small-house-sitting-on-top-of-a-hill-under-a-night-sky-lTiS6VVjFyg",
        set: (v) => 
            v === "" 
                ? "https://unsplash.com/photos/a-small-house-sitting-on-top-of-a-hill-under-a-night-sky-lTiS6VVjFyg"
                : v
    },
    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;