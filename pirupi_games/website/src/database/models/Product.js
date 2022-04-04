"use strict";

const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Products";

  const cols = {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING(15),
    },

    description: {
      type: DataTypes.TEXT,
    },

    price: {
      type: DataTypes.INTEGER,
    },

    product_image: {
      type: DataTypes.STRING(50),
    },
  };

  const config = {
    timestamps: false,
    tableName: "products",
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = (models) => {
    Product.hasMany(models.Final_products, {
      as: "final_products",
      foreignKey: "product_id",
    });
  };

  return Product;
};
