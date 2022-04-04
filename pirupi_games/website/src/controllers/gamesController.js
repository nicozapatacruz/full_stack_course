const genders = ["RPG", "Action", "Adventure", "Sports", "Shooters", "Indie", "Race", "Puzzles"];

const gamesServices = require("../services/gamesServices");
const consolServices = require("../services/consolServices");
const { validationResult } = require("express-validator");

const gamesController = {
  /*INDEX*/
  index: async (req, res) => {
    res.render("games/details", {
      consols: await consolServices.getAll(),
      games: await gamesServices.getAll(),
    });
  },

  /**GAME SERVICES**/

  /*Create Game Form*/
  createGame: (req, res) => {
    res.render("games/gamesCreation", {
      genders,
    });
  },

  /*Save Game*/
  storeGame: async (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      await gamesServices.create(req.body, req.file.filename);
      res.redirect("/games");
    } else {
      res.render("games/gamesCreation", {
        errors: errors.mapped(),
        old: req.body,
        genders,
      });
    }
  },

  /*Edit Game*/
  editGame: async (req, res) => {
    idSearch = req.params.id;
    const game = await gamesServices.findOne(idSearch);

    res.render("games/gamesEdit", {
      game,
    });
  },

  /*Update Game*/
  updateGame: async (req, res) => {
    const idSearch = req.params.id;
    await gamesServices.update(idSearch, req.body /*, req.file.filename*/);
    res.redirect("/games");
  },

  /*Destroy Game*/
  destroyGame: async (req, res) => {
    const idSearch = req.params.id;
    await gamesServices.destroy(idSearch);
    res.redirect("/games");
  },
};

module.exports = gamesController;
