const { Router } = require("express");
const { getOrder, addOrder } = require("../services/order");
const router = Router();

router.get("/:orderId",async (req,res,next) => {
    const {orderId} = req.params;
    const order = await getOrder(orderId);
    res.status(200).json(order);
});

router.post("/", async (req,res,next) => {
   const order = await addOrder(req.body);
   res.status(200).json(order);
});

module.exports = router;
