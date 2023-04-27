const express = require("express");;
const login = express.Router();

//Passport file for login/register
const passport = require("../../Auth");

//Login passport authentication
login.post("/login", (req, res) => {
  passport.authenticate("local-login", (error, user, info) => {
    if (error) {
      return res.status(500).json({
        message: error || "Something happend",
        error: error.message || "Server error",
      });
    }

    req.logIn(user, function (error, data) {
      if (error) {
        return res.status(500).json({
          message: error || "Something happend",
          error: error.message || "Server error",
        });
      }
    });

    user.isAuthenticated = true;
    return res.json(user);
  })(req, res);
});

//Logout endpoint
login.get("/api/logout", (req, res) => {
  req.logout(); // This function is provided by passport.js to remove the user session.
  res.redirect("/"); // Redirect to homepage or any other desired page after logout.
});

module.exports = login;