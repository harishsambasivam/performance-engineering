const { DataTypes } = require('sequelize');
const connectPostgres = require("../config/database");
const sequelize = connectPostgres();

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    unit_price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    tableName: "products"
});


// sequelize.sync({ force: true });


module.exports = Product;
