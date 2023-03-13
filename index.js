const express = require("express"); // import express library
const mongoose = require("mongoose"); // import mongodb
const cookieSession = require("cookie-session"); //import cookie
const passport = require("passport")
const key = require("./conifg/key"); //import keys from config and apply here
require("./models/User"); // import users from models to the main project
require("./services/passport"); // import service part to the main project


mongoose.connect(key.mongoURI);

const app = express(); //first app

//cookie
app.use(
    cookieSession({ //cookieSession is not realy inheritenty passing data to passport it's just proccessing incoming request populating that req.session property that shown in route handler in passport.js and passport access the data that exists on req.session
        maxAge: 30 * 24 * 60 * 60 * 1000,  // it says "I want these cookie to last for 30 days before it automaticaly expires".
        keys:[key.cookieKeys] // it allows us to specify multiple keys and if do randomly pick one to use to incript any givem cookie. and just allows to ride multiple cookie an in additional level of security.
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // These working when we require the auth routes file it returns a functions thats what we export from the routes files on require statement right here, so this function will return immediatly to the callback function with the app object.

// app.get('/', (req, res) => {
//     res.send({ hello: 'World' });
// });

app.listen(5000);

// localhost:5000

// https://accounts.google.com/signin/oauth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=1006500980018-q9h3akqjiiesv3hb122uab8b95t2hj9d.apps.googleusercontent.com&service=lso&o2v=2&flowName=GeneralOAuthFlow
