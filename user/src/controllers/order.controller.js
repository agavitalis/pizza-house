import { Order } from "../models/index.js";
import { emitToKafka } from "../events/index.js";

export async function createOrder(req, res) {
    let order = await Order.create(req.body)
    await emitToKafka("orderCreated", JSON.stringify(order))
    res.status(201).json(order)
}
