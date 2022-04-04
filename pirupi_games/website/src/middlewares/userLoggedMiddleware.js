const userServices = require("../services/userServices");

async function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  let emailInCookie = req.cookies.userEmail;
  let userFromCookie;
  if (emailInCookie) {
    userFromCookie = await userServices.findEmail(emailInCookie);
  }

  if (userFromCookie) {
    req.session.userLoggedId = userFromCookie.id;
  }
  let user;
  if (req.session.userLoggedId) {
    user = await userServices.findOne(req.session.userLoggedId);
  }

  if (user) {
    res.locals.isLogged = true;
    res.locals.userLogged = user;
  }

  next();
}

module.exports = userLoggedMiddleware;
