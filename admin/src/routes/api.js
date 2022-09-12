import express from "express";
const router = express.Router();
import * as c from "../controllers/index";

router.route("/product")
    .get(c.getProducts)
    .post(c.createProduct)

router.route("/product/:productId")
    .get(c.getProduct)
    .put(c.updateProduct)
    .delete(c.deleteProduct)

router.route("/order")
    .get(c.getOrders)

router.route("/product/:productId")
    .get(c.getOrder)
    .put(c.updateOrder)
    .delete(c.deleteOrder)

module.exports = router;