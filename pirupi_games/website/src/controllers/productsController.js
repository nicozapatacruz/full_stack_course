const { validationResult } = require("express-validator");

/* Importando informacion de las consolas*/
/*
const productColorsJSON = fs.readFileSync("databaseJSON/productosColores.json", "utf-8");
const productColors = JSON.parse(productColorsJSON);

const productMemoriesJSON = fs.readFileSync("databaseJSON/productosMemorias.json", "utf-8");
const productMemories = JSON.parse(productMemoriesJSON);
*/

/*Importando Consolas y Productos*/

const consolServices = require("../services/consolServices");
const productsServices = require("../services/productsServices");

const productsController = {
  products: async (req, res) => {
    res.render("products/products", {
      products: await productsServices.getAll(),
      consols: await consolServices.getAll(),
    });
  },

  add: (req, res) => {
    res.render("products/productAdd", {
      old: req.body,
    });
  },

  store: async (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      try {
        await productsServices.create(req.body, req.file.filename);
        res.redirect("/products");
      } catch (error) {
        console.log(error);
      }
    } else {
      res.render("products/productAdd", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },

  details: async (req, res) => {
    const id = req.params.id;
    const product = await productsServices.findOne(id);

    res.render("products/productDetail", {
      product,
      productColors: await productsServices.getAllColors(),
      productMemories: await productsServices.getAllMemories(),
      consols: await consolServices.getAll(),
      products: await productsServices.getAll(),
    });
  },

  edit: async (req, res) => {
    const idSearch = req.params.id;
    product = await productsServices.findOne(idSearch);

    res.render("products/productEdit", {
      product,
    });
  },

  update: async (req, res) => {
    const idSearch = req.params.id;
    await productsServices.update(idSearch, req.body, req.file);
    res.redirect(`/products/details/${idSearch}`);
  },

  confirmDestroy: async (req, res) => {
    const idSearch = req.params.id;
    product = await productsServices.findOne(idSearch);
    res.render("products/productDelete", {
      product,
    });
  },

  destroy: async (req, res) => {
    const idSearch = req.params.id;
    await productsServices.destroy(idSearch);
    res.redirect("/products");
  },
};

module.exports = productsController;
