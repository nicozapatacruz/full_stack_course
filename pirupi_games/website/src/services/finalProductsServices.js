const db = require("../database/models");
const fs = require("fs");
const path = require("path");

//Guardando datos en la DB con JSON
/*
const productsJSON = path.join(__dirname, "../../databaseJSON/productos.json");
const products = JSON.parse(fs.readFileSync(productsJSON, "utf-8"));

function saveProducts() {
  const to_text = JSON.stringify(products, null, 4);
  fs.writeFileSync(productsJSON, to_text, "utf-8");
}
*/

module.exports = {
  async getAll() {
    try {
      return await db.Final_products.findAll({
        include: [{ association: "products" }, { association: "product_colors" }, { association: "memories" }],
      });
    } catch (error) {
      console.log(error);
    }
  },

  async create(id, body) {
    const finalProduct = await db.Final_products.create({
      product_id: id,
      product_color_id: body.color,
      memory_id: body.memory,
    });

    return finalProduct;
  },

  async destroy(id) {
    try {
      await db.Final_products.destroy({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};
