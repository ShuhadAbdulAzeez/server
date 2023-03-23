const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
  //core properties
  title: String,
  body: String,
  subject: String,
  // embeded a list of recipients to make sure that we have only given a end user to click on email link one time.
  recipients: [RecipientSchema],
  // recording number of times someone votesor total number of yes or no 
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  //relationship field
  // With these property we add the idea to surveySchema that every survey going to belong to a very particular user. 
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  //additional field.
  dateSent: Date,
  lastResponded: Date
});

mongoose.model("surveys", surveySchema);
