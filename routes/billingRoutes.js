//this file handle all the different billing related handlers inside our application.
const keys = require("../conifg/key");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require('../middleware/requireLogin');

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "5 Dollars for 5 Credits",
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
