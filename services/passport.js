const passport = require("passport"); // import passport library
const GoogleStrategy = require("passport-google-oauth20").Strategy; // import passport google OAuth
const mongoose = require("mongoose"); // import mongoose library
const key = require("../conifg/key"); //import keys from config and apply here

const User = mongoose.model("users");

//passport :- It is overoll or just a very genral or very basic sets of helepers for handling authentication. it has many different ways to keep track user one of which is making use of cookies.

//cookies
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  //function we write to turn user id into a user
  User.findById(id).then((user) => {
    done(null, user);
  });
});
//

// The authentication part with google
passport.use(
  new GoogleStrategy( //google strategy intrernaly has some identifier that says "Hey my name is google if anyone ask me to authenticate with google use this strategy"
    {
      clientID: key.googleClientID,
      clientSecret: key.googleClientSecret,
      callbackURL: "/auth/google/callback", //adding a route handler to our express application to handle a user coming back to our application on these router
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // we already have a record with given profile ID
        return done(null, existingUser);
      }
        // we dont havve a record with given profile ID, make a new record
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      // console.log('access token', accessToken);//accessToken :- It is the token that essentialy allows us to reach back to the google and say "Hey in the past this user said that we could read their profile or we could add or delete their emails inside email box" here the accesToken allows us to do that.
      // console.log('refresh token', refreshToken); // refreshToken :- It allows use to refresh accessToken because the accessToken will expires after some amount of time, So we can be given optionally a refreshToken that allows us to automatically update the accessToken and reaches the users account in some amount of time.
      // console.log('profile', profile);
    }
  )
);



// synchronous programming is suitable for simple applications with limited functionality, 
// while asynchronous programming is suitable for more complex applications that require better performance and responsiveness.
