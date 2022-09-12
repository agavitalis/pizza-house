import { Order } from "../models/index.js";

export async function createOrder(req, res) {
    let order = await Order.create(req.body)
    res.status(201).json(order)
}
