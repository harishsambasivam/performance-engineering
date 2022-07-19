const logger = require("../utils/logger");
const Product = require("../models/product");

module.exports.getProduct = async (productId) => {
    logger.info("Get Product");
    const product = await Product.findOne({ where: { id : productId } });
    return product;
};
module.exports.addProduct = async (product) => {
    logger.info("Add Product");
    const addedProduct = await Product.create(product);
    return addedProduct;
};
