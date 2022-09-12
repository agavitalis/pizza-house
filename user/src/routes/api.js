import express from "express";
const router = express.Router();
import * as c from "../controllers/index";

router.route("/product")
    .get(c.getProducts)
  
router.route("/product/:productId")
    .get(c.getProduct)
    
router.route("/order")
    .get(c.createOrder)
  
module.exports = router;