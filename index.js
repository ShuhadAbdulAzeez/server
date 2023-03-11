const express = require("express"); // import express library
const passport = require("passport"); // import passport library
const GoogleStrategy = require("passport-google-oauth20").Strategy; // import passport google OAuth
const key = require("./conifg/key"); //import keys from config and apply here

const app = express(); //first app

// The authentication part with google
passport.use(
  new GoogleStrategy( //google strategy intrernaly has some identifier that says "Hey my name is google if anyone ask me to authenticate with google use this strategy"
    {
      clientID: key.googleClientID,
      clientSecret: key.googleClientSecret,
      callbackURL: "/auth/google/callback", //adding a route handler to our express application to handle a user coming back to our application on these router
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);//accessToken :- It is the token that essentialy allows us to reach back to the google and say "Hey in the past this user said that we could read their profile or we could add or delete their emails inside email box" here the accesToken allows us to do that.
      console.log('refresh token', refreshToken); // refreshToken :- It allows use to refresh accessToken because the accessToken will expires after some amount of time, So we can be given optionally a refreshToken that allows us to automatically update the accessToken and reaches the users account in some amount of time.
      console.log('profile', profile); 
    }
  )
);

// route handler 1
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// route handler 2
app.get("/auth/google/callback", passport.authenticate("google"));

// app.get('/', (req, res) => {
//     res.send({ hello: 'World' });
// });

app.listen(5000);

// localhost:5000

// https://accounts.google.com/signin/oauth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=1006500980018-q9h3akqjiiesv3hb122uab8b95t2hj9d.apps.googleusercontent.com&service=lso&o2v=2&flowName=GeneralOAuthFlow