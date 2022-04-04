const consolesServices = require("../../services/consolServices");
const API_HOST = require("../../constants");

const consolesController = {
  /*List Method*/
  list: async (req, res) => {
    const consoles = await consolesServices.getAll();
    const newConsoles = [];
    for (let i = 0; i < consoles.length; i++) {
      newConsoles.push({
        id: consoles[i].id,
        name: consoles[i].name,
        detail: `${API_HOST}/api/consoles/${consoles[i].id}`,
      });
    }
    const respuesta = {
      meta: {
        status: 200,
        count: consoles.length,
        url: "api/consoles",
      },
      data: newConsoles,
    };
    res.json(respuesta);
  },

  /*Detail Method*/
  detail: async (req, res) => {
    const console = await consolesServices.findOne(req.params.id);
    if (!console) {
      const respuesta = {
        meta: {
          status: 404,
          url: `api/consoles/${req.params.id}`,
          message: "Console not found",
        },
      };
      return res.json(respuesta);
    }
    const newConsole = {
      id: console.id,
      name: console.name,
      console_image: `${API_HOST}/api/consoles/${console.id}/${console.console_image}`,
    };
    const respuesta = {
      meta: {
        status: 200,
        url: `api/consoles/${console.id}`,
      },
      data: newConsole,
    };
    res.json(respuesta);
  },
};

module.exports = consolesController;
