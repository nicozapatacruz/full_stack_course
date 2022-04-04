const express = require("express");
const router = express.Router();

const productsController = require("../../controllers/api/productsController.js");

/*-Product Creation-*/
/**Product list **/
router.get("/products", productsController.list);
/**Product detail **/
router.get("/products/:id", productsController.detail);

module.exports = router;
