const logger = require("../utils/logger")
const { Order, OrderedProducts } = require("../models/order");
const Product = require("../models/product");
const connectPostgres = require("../config/database")
const sequelize = connectPostgres();

module.exports.getOrder = async (orderId) => {
    logger.info("Get Order");
    try {
        const order = await Order.findOne({ where: { id: orderId } })
        const orderProductMapping = await OrderedProducts.findOne({ where: { OrderId: orderId } });
        return {
            ...order?.dataValues,
            ...orderProductMapping?.dataValues
        }
    } catch (err) {
        logger.error(err);
        throw err;
    }
}
module.exports.addOrder = async (orderData) => {
    logger.info("Add Order");
    try {
        const { userId, productId, quantity } = orderData;

        const productDetails = await Product.findOne({ where: { id: productId } })
        const { unit_price, stock } = productDetails;

        if (stock < quantity) throw new Error("stock is empty");

        const t = await sequelize.transaction();

        try {
            const orderDetails = await Order.create({
                UserId: userId,
                orderedDate: new Date(),
                total: quantity * unit_price
            }, { transaction: t });

            const orderMapping = await OrderedProducts.create({
                ProductId: productId,
                OrderId: orderDetails.id,
                price: orderDetails.total,
                quantity: quantity
            }, { transaction: t });
            await t.commit();
            return { ...orderMapping.dataValues, productName: productDetails.name };
        } catch (err) {
            await t.rollback();
            throw new Error("unable to place your order");
        }
    } catch (err) {
        logger.error(err);
        throw err;
    }
}
