module.exports = (sequelize, DataTypes) => {
  const alias = "Consoles";

  const cols = {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING(50),
    },

    console_image: {
      type: DataTypes.STRING(50),
    },
  };

  const config = {
    timestamps: false,
    tableName: "consoles",
  };

  const Console = sequelize.define(alias, cols, config);

  Console.associate = (models) => {
    Console.belongsToMany(models.Games, {
      as: "games",
      through: "console_games",
      foreignKey: "game_id",
      otherKey: "console_id",
    });
  };

  return Console;
};
