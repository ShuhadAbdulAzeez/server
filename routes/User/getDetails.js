const express = require("express");
const getDetails = express.Router();

const User = require("../../models/UserInfo");

getDetails.get("/getDetails", (req, res) => {
    if (req.session.passport.user) {
      User.findOne(
        { email: req.session.passport.user.email },
        function (err, user) {
          if (err) console.log(err);
  
          const { username } = user;
  
          res.status(200).send({
            username,
          });
        }
      );
    } else {
      res.status(400).send({ message: "User not logged in" });
    }
  });
  

module.exports = getDetails;