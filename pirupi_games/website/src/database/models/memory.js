const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Memories";

  const cols = {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    memory: {
      type: DataTypes.BIGINT,
    },
  };

  const config = {
    timestamps: false,
    tableName: "memories",
  };

  const Memory = sequelize.define(alias, cols, config);

  Memory.associate = (models) => {
    Memory.hasMany(models.Final_products, {
      as: "final_products",
      foreignKey: "memory_id",
    });
  };

  return Memory;
};
