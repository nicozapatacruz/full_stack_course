const userServices = require("../services/userServices");

async function adminMiddleware(req, res, next) {
  const user = await userServices.findOne(req.session.userLoggedId);
  if (!user) {
    return res.redirect("/");
  } else if (!user.admin) {
    return res.redirect("/");
  }
  next();
}

module.exports = adminMiddleware;
