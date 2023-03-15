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
  app.get("/auth/google/callback", passport.authenticate("google"));

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
