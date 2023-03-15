const mongoose = require('mongoose');
const { Schema } = mongoose;  //Schema :- It provides an abstraction for working with data in the application code, and is used to create a Model object that represents a collection in the database.

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema); // By using this mongoose.model command we are telling mongoose that we want to create a new collection called users