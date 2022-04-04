const db = require("../database/models/");
const path = require("path");
const fs = require("fs");

//Guardando datos en la BD con JSON
/*const consolsJSON = path.join(__dirname, "../database/consolas.json");
const consols = JSON.parse(fs.readFileSync(consolsJSON, "utf-8"));

function saveProducts() {
  const to_text = JSON.stringify(consols, null, 4);
  fs.writeFileSync(consolsJSON, to_text, "utf-8");
}*/

const unlinkFile = (consol) => {
  const file = path.join(__dirname, `../../public/images/consolas/${consol.console_image}`);
  fs.unlinkSync(file);
};

module.exports = {
  async getAll() {
    try {
      return await db.Consoles.findAll();
    } catch (error) {
      console.log(error);
    }
  },

  async findOne(id) {
    try {
      const consol = await db.Consoles.findByPk(id);
      return consol;
    } catch (error) {
      console.log(error);
    }
  },

  async create(body, file) {
    try {
      const consol_to_create = await db.Consoles.create({
        name: body.name,
        console_image: file,
      });

      return consol_to_create;
    } catch (error) {
      console.log(error);
    }
  },

  async update(id, body, file) {
    try {
      const consol = await db.Consoles.findByPk(id);

      if (!file) {
        file = consol.console_image;
      } else {
        file = file.filename;
        unlinkFile(consol);
      }

      await consol.update({
        id: consol.id,
        name: body.name,
        console_image: file,
      });

      return consol;
    } catch (error) {
      console.log(error);
    }
  },

  async destroy(id) {
    try {
      const consol = await db.Consoles.findByPk(id);
      await db.Consoles.destroy({
        where: {
          id: id,
        },
      });
      unlinkFile(consol);
    } catch (error) {
      console.log(error);
    }
  },
};
