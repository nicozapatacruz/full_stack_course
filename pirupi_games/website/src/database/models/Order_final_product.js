const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Orders_final_products";

  const cols = {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    final_product_id: {
      type: DataTypes.BIGINT,
      foreignKey: true,
    },

    order_id: {
      type: DataTypes.BIGINT,
      foreignKey: true,
    },
  };

  const config = {
    timestamps: true,
    tableName: "orders_final_products",
  };

  const Order_final_product = sequelize.define(alias, cols, config);

  Order_final_product.associate = (models) => {
    Order_final_product.belongsTo(models.Final_products, {
      as: "final_products",
      foreignKey: "final_product_id",
    });

    Order_final_product.belongsTo(models.Orders, {
      as: "orders",
      foreignKey: "orders_id",
    });
  };

  return Order_final_product;
};
