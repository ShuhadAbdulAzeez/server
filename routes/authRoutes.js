const passport = require("passport");

module.exports = (app) => {
  // These routes are here for handling Oauth process
  // route handler 1
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  // route handler 2
  app.get(
    "/auth/google/callback", //after the user comebacks from the Oauth flow 
    passport.authenticate("google"), // passport middleware takes over right here it does it's thing, it says "Ok i'm all done i'm going to pass the request on the next handler in these chain which is".
    (req, res) => { // these arrow function we take the request in and 
      res.redirect("/surveys"); // we tell the response to inform the browser that needs to go to these route '/surveys'
    }
  );

  // route handler 3
  app.get("/api/current_user", (req, res) => {
    //req :- it represent incoming request. / res :- it represent the outgoing responce.
    res.send(req.user); //access to the user
    // res.send(req.session)
  });

  //route handler 4 LOGOUT PART
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });
};
