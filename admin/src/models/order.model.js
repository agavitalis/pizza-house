const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        customerName: { type: String, required: true },
        customerAddress: { type: String, default: null },
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
        quantity: { type: Number, default: null },
        status: { type: String, default: null },
    },
    { timestamps: true }
);

export const Order = mongoose.model("Order", OrderSchema);