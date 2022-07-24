const { Router } = require("express");
const { getOrder, addOrder } = require("../services/order");
const logger = require("../utils/logger");
const router = Router();

router.get("/:orderId", async (req, res, next) => {
    try {
        const { orderId } = req.params;
        const order = await getOrder(orderId);
        res.status(200).json(order);
    } catch (err) {
        logger.error(err);
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const order = await addOrder(req.body);
        res.status(200).json(order);
    } catch (err) {
        logger.error(err);
        next(err);
    }
});

module.exports = router;
