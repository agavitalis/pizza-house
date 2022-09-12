import { Product } from "../models/index.js";

export async function getProducts(req, res) {
    const products = await Product.find()
    res.status(200).json(products)
}

export async function getProduct(req, res) {
    const product = await Product.findById(req.params.productId)
    res.status(200).json(product)
}
