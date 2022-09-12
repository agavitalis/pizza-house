const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        customerName: { type: String, required: true },
        customerAddress: { type: String, default: null },
        product: {
            type: Types.ObjectId,
            ref: 'Product',
        },
        quantity: { type: Number, default: null },
        status: { type: String, default: null },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);