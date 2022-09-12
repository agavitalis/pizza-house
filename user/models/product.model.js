const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, default: null },
        price: { type: Number, default: null },
        imageURI: { type: String, default: null },
        isInStock: { type: Boolean, default: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);