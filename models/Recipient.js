const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;

//Whats happening here
// Every single recipient would hava an email property and would have the responded body which is going to be a boolean and default will be false so really we think about creating new recipient we don't have to assign were specificaly integrate were the responded property is it will be automatically defaulted to false for us, whenever we create a new recipients, So we only realy have to think about is making sure that the email is string. 