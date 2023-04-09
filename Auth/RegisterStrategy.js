const Strategy = require("passport-local").Strategy;
const User = require("../models/UserInfo");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const SignupStrategy = new Strategy(
  { passReqToCallback: true, usernameField: "email" },
  function (req, email, password, done) {
    User.findOne({ email })
      .lean()
      .then((user) => {
        if (!user) {
          const encryptedPassword = bcrypt.hashSync(password, salt);
          const { username, confirmPassword } = req.body;

          if (password !== confirmPassword) {
            return done("Passwords do not match!", null);
          }

          let newUser = new User({
            email,
            username,
            password: encryptedPassword,
          });

          return newUser.save();
        } else {
          return Promise.reject("User already exists. Please login!");
        }
      })
      .then((inserted) => {
        return done(null, inserted);
      })
      .catch((error) => {
        return done(error, null);
      });
  }
);

module.exports = SignupStrategy;
