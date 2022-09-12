const express = require("express");
const router = express.Router();

router.route("/product")
    .get(productController.getProduct)
    .post(productController.createProduct)
  
router.route("/product/:productId")
    .get(productController.getACheck)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct)

    
module.exports = router;