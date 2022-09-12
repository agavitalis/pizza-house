import { Order } from "../models/index.js";

export async function getOrders(req, res) {
    const Orders = await Order.find()
    res.status(200).json(Orders)
}

export async function getOrder(req, res) {
    const Order = await Order.findById(req.params.OrderId)
    res.status(200).json(Order)
}

export async function updateOrder(req, res) {
    const Order = await Order.findByIdAndUpdate(req.params.OrderId, req.body, { new: true })
    res.status(200).json(Order)
}

export async function deleteOrder(req, res) {
    const Order = await Order.findByIdAndDelete(req.params.OrderId)
    res.status(200).json(Order)
}