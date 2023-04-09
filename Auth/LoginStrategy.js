const Strategy = require("passport-local").Strategy;
const User = require("../models/UserInfo");
const bcrypt = require("bcryptjs");

const LoginStrategy = new Strategy({ usernameField: "email" }, function (
  email,
  password,
  done
) {
  User.findOne({ email })
    .lean()
    .then((user) => {
      if (!user) {
        return Promise.reject("No user found");
      }

      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (!isPasswordValid) {
        return Promise.reject("Email or Password not valid");
      }

      return Promise.resolve(user);
    })
    .then((user) => {
      return done(null, user);
    })
    .catch((error) => {
      return done(error, null);
    });
});

module.exports = LoginStrategy;
