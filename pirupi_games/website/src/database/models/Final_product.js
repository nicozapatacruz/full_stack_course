const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Final_products";

  const cols = {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    product_id: {
      type: DataTypes.BIGINT,
      foreignKey: true,
    },

    memory_id: {
      type: DataTypes.BIGINT,
      foreignKey: true,
    },

    product_color_id: {
      type: DataTypes.BIGINT,
      foreignKey: true,
    },
  };

  const config = {
    timestamps: false,
    tableName: "final_products",
  };

  const Final_product = sequelize.define(alias, cols, config);

  Final_product.associate = (models) => {
    Final_product.belongsTo(models.Products, {
      as: "products",
      foreignKey: "product_id",
    });

    Final_product.belongsTo(models.Memories, {
      as: "memories",
      foreignKey: "memory_id",
    });

    Final_product.belongsTo(models.Product_colors, {
      as: "product_colors",
      foreignKey: "product_color_id",
    });

    Final_product.hasMany(models.Orders_final_products, {
      as: "order_final_products",
      foreignKey: "final_product_id",
    });
  };

  return Final_product;
};
