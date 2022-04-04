const express = require("express");
const router = express.Router();

const userController = require("../../controllers/api/userController.js");

/*-User Creation-*/
/**User list **/
router.get("/users", userController.list);
/**User detail **/
router.get("/users/:id", userController.detail);

module.exports = router;
