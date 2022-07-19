const { Router } = require("express");
const { getProduct, addProduct } = require("../services/product");
const router = Router();

router.get("/:productId", async (req,res,next) => {
    const { productId } = req.params;
    const product = await getProduct(productId);
    res.status(200).json(product);
});

router.post("/", async (req,res,next) => {
    const product = await addProduct(req.body);
    res.status(200).json(product);
});

module.exports = router;
