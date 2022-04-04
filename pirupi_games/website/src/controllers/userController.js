const { validationResult } = require("express-validator");
const userServices = require("../services/userServices");
const bcryptjs = require("bcryptjs");

// const usersJSON = path.join(__dirname, "../../databaseJSON/usuarios.json");
// const users = JSON.parse(fs.readFileSync(usersJSON, "utf-8"));

const userController = {
  /*Register Method*/
  register: (req, res) => {
    res.render("user/register");
  },

  /*Login Method*/
  login: (req, res) => {
    res.render("user/login");
  },

  /*Store user in DataBase*/
  storeUser: async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("user/register", {
        errors: errors.mapped(),
        old: req.body,
      });
    } else {
      await userServices.create(req.body, req.file);
      res.redirect("/user/login");
    }
  },

  /*Edit user view*/
  editUser: (req, res) => {
    res.render("user/edit");
  },

  /*Update user information*/
  updateUser: async (req, res) => {
    const idSearch = req.params.id;
    await userServices.update(idSearch, req.body, req.file);
    res.redirect("/user/profile");
  },

  confirmDestroy: async (req, res) => {
    const idSearch = req.params.id;
    user = await userServices.findOne(idSearch);
    res.render("user/delete", {
      user,
    });
  },

  /*Delete user from DataBase*/
  destroyUser: async (req, res) => {
    const idSearch = req.params.id;
    await userServices.destroy(idSearch);
    res.clearCookie("userEmail");
    req.session.destroy();
    res.redirect("/");
  },

  /*Confirm user Login attempt*/
  confirmUser: async (req, res) => {
    const errors = validationResult(req);
    let loginUser = await userServices.findEmail(req.body.email);

    if (!errors.isEmpty()) {
      res.render("user/login", {
        errors: errors.mapped(),
        old: req.body,
      });
    } else {
      if (loginUser) {
        if (bcryptjs.compareSync(req.body.password, loginUser.password)) {
          req.session.userLoggedId = loginUser.id;

          if (req.body.remember_user) {
            res.cookie("userEmail", req.body.email, {
              maxAge: 1000 * 60 * 60,
            });
          }
          return res.redirect("/");
        }
        return res.render("user/login", {
          errors: {
            email: {
              msg: "Email o contraseña invalido",
            },
          },
        });
      }

      return res.render("user/login", {
        errors: {
          email: {
            msg: "Email o contraseña invalida",
          },
        },
      });
    }
  },

  /*Get user profile*/
  profile: (req, res) => {
    res.render("user/profile");
  },

  /*Logout user from service*/
  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
};

module.exports = userController;
