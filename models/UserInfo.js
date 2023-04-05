const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
  id: String,

  email: String,
  usenname: String,
  password: String,
  confirmPassword: String,
});

const User = mongoose.model("userinfos", userInfoSchema);

module.exports = User;