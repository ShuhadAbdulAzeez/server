const passport = require("passport");
const User = require("../models/UserInfo");

//Serialize user with passport using hes/her email
passport.serializeUser(function (email, done) {
  done(null, email.id);
});

//Deserialize user with passport using hes/her email
passport.deserializeUser((id, done) => {
  User.findById(id).then((email) => {
    done(null, email);
  });
});

//Requiring Login - Register strategy files
const LoginStrategy = require("./LoginStrategy");
const RegisterStrategy = require("./RegisterStrategy");
//Using the above
passport.use("local-login", LoginStrategy);
passport.use("local-register", RegisterStrategy);

module.exports = passport;