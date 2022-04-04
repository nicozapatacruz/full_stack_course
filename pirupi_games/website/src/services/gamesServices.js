const db = require("../database/models");

//Guardando datos en la DB con JSON
/*
const gamesJSON = path.join(__dirname, "../../databaseJSON/juegos.json");
const games = JSON.parse(fs.readFileSync(gamesJSON, "utf-8"));

function saveProducts() {
  const to_text = JSON.stringify(games, null, 4);
  fs.writeFileSync(gamesJSON, to_text, "utf-8");
}
*/

module.exports = {
  async getAll() {
    return await db.Games.findAll();
  },

  async findOne(id) {
    const game = await db.Games.findByPk(id);
    return game;
  },

  async create(body, file) {
    const game_to_create = await db.Games.create({
      id: Date.now(),
      ...body,
      game_images: file,
    });

    return game_to_create;
  },

  async update(id, body, file) {
    const game = await db.Games.findByPk(id);

    if (!file) {
      file = game.game_images;
    }

    await game.update({
      id: game.id,
      ...body,
      game_images: file,
    });

    return game;
  },

  async destroy(id) {
    return await db.Games.destroy({
      where: {
        id: id,
      },
    });
  },
};
