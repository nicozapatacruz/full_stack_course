const { validationResult } = require("express-validator");

/* Importando informacion de las consolas*/
/*
const productColorsJSON = fs.readFileSync("databaseJSON/productosColores.json", "utf-8");
const productColors = JSON.parse(productColorsJSON);

const productMemoriesJSON = fs.readFileSync("databaseJSON/productosMemorias.json", "utf-8");
const productMemories = JSON.parse(productMemoriesJSON);
*/

/*Importando Final Products Services*/

const finalProductsServices = require("../services/finalProductsServices");

const finalProductsController = {
  cart: async (req, res) => {
    const finalProducts = await finalProductsServices.getAll();
    //console.log(finalProducts);
    res.render("products/productCart", {
      finalProducts: finalProducts,
    });
  },

  store: async (req, res) => {
    try {
      await finalProductsServices.create(req.params.id, req.body);
      res.redirect("/products/cart");
    } catch (error) {
      console.log(error);
    }
  },

  destroy: async (req, res) => {
    const idSearch = req.params.id;
    await finalProductsServices.destroy(idSearch);
    res.redirect("/products/cart");
  },
};

module.exports = finalProductsController;
