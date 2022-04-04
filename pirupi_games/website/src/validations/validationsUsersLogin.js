const { check } = require("express-validator");
const userServices = require("../services/userServices");

module.exports = [check("email").notEmpty().withMessage("Ingresar un email.").bail().isEmail().withMessage("Debes ingresar un email valido: nombre@servicio.com"), check("password").notEmpty().withMessage("Ingresar la contraseña")];
