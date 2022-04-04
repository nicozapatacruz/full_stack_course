const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const alias = "Games";

  const cols = {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING(50),
    },

    description: {
      type: DataTypes.TEXT,
    },

    game_image: {
      type: DataTypes.STRING(50),
    },

    genre_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  };

  const config = {
    timestamps: false,
    tableName: "games",
  };

  const Game = sequelize.define(alias, cols, config);

  Game.associate = (models) => {
    Game.belongsTo(models.Genres, {
      as: "genres",
      foreignKey: "genre_id",
    });

    Game.belongsToMany(models.Consoles, {
      as: "consoles",
      through: "console_games",
      foreignKey: "console_id",
      otherKey: "game_id",
    });
  };

  return Game;
};
