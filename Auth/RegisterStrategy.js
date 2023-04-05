const Strategy = require("passport-local").Strategy;
const User = require("../models/UserInfo");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const SignupStrategy = new Strategy(
  { passReqToCallback: true, usernameField: "email" },
  function (req, email, password, done) {
    User.findOne({ email })
      .lean()
      .exec((err, user) => {
        if (err) {
          return done(err, null);
        }

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

          newUser.save((error, inserted) => {
            if (error) {
              return done(error, null);
            }

            return done(null, inserted);
          });
        }
        if (user) {
          return done("User already exists. Please login!", null);
        }
      });
  }
);

module.exports = SignupStrategy;
