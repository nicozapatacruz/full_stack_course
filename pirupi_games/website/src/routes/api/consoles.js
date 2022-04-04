const express = require("express");
const router = express.Router();

const consolesController = require("../../controllers/api/consolesController.js");

/*-consoles Creation-*/
/**consoles list **/
router.get("/consoles", consolesController.list);
/**consoles detail **/
router.get("/consoles/:id", consolesController.detail);

module.exports = router;
