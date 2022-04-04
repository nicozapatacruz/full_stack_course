const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Orders";

  const cols = {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    date: {
      type: DataTypes.DATE,
    },

    user_id: {
      type: DataTypes.BIGINT,
      foreignKey: true,
    },

    user_address: {
      type: DataTypes.STRING(100),
    },
  };

  const config = {
    timestamps: true,
    tableName: "orders",
  };

  const Order = sequelize.define(alias, cols, config);

  Order.associate = (models) => {
    Order.belongsTo(models.Users, {
      as: "users",
      foreignKey: "user_id",
    });

    Order.hasMany(models.Orders_final_products, {
      as: "order_final_products",
      foreignKey: "order_id",
    });
  };

  return Order;
};
