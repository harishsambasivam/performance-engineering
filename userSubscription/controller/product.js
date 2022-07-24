const { Router } = require("express");
const { getProduct, addProduct } = require("../services/product");
const logger = require("../utils/logger");
const router = Router();

router.get("/:productId", async (req, res, next) => {
    try {
        const { productId } = req.params;
        const product = await getProduct(productId);
        res.status(200).json(product);
    } catch (err) {
        logger.error(err);
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const product = await addProduct(req.body);
        res.status(200).json(product);
    } catch (err) {
        logger.error(err);
        next(err);
    }

});

module.exports = router;
