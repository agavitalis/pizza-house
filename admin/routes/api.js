const express = require("express");
const router = express.Router();

/*
|-------------------------------------------------------------------------------
| Controller Import
|-------------------------------------------------------------------------------
*/
const productController = require("../controllers/product.controller");

/*
|-------------------------------------------------------------------------------
| Route Declaration
|-------------------------------------------------------------------------------
*/

router.route("/product")
    .get(productController.getProduct)
    .post(productController.createProduct)
  
router.route("/product/:productId")
    .get(productController.getACheck)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct)

    
/*
|-------------------------------------------------------------------------------
| Route Export
|-------------------------------------------------------------------------------
*/
module.exports = router;