const { check } = require("express-validator");
const path = require("path");

module.exports = [
  check("name").notEmpty().withMessage("Debes ingresar un nombre de consola").bail().isLength({ min: 3 }).withMessage("El nombre de la consola debe ser mas largo"),

  check("consol_image").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpg", ".png", ".gif", ".jpeg"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(",")}`);
      }
    }

    return true;
  }),
];
