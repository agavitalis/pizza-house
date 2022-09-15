import { Product } from "../models/index.js";
import { emitToKafka } from "../events/index.js";

export async function createProduct(req, res) {
    let product = await Product.create(req.body)
    await emitToKafka("productCreated", JSON.stringify(product))
    res.status(201).json(product)
}

export async function getProducts(req, res) {
    const products = await Product.find()
    res.status(200).json(products)
}

export async function getProduct(req, res) {
    const product = await Product.findById(req.params.productId)
    res.status(200).json(product)
}

export async function updateProduct(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true })
    res.status(200).json(product)
}

export async function deleteProduct(req, res) {
    const product = await Product.findByIdAndDelete(req.params.productId)
    res.status(200).json(product)
}