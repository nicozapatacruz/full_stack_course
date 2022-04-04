"use strict";
const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Genres";

  const cols = {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING(50),
    },
  };

  const config = {
    timestamps: false,
    tableName: "genres",
  };

  const Genre = sequelize.define(alias, cols, config);

  Genre.associate = (models) => {
    Genre.hasMany(models.Games, {
      as: "games",
      foreignKey: "genre_id",
    });
  };

  return Genre;
};
