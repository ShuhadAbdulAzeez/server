const express = require("express"); // import express library
const mongoose = require("mongoose"); // import mongodb
const cookieSession = require("cookie-session"); //import cookie
const passport = require("passport");
const bodyParser = require('body-parser');
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
const keys = require("./conifg/key"); //import keys from config and apply here
require("./models/User"); // import users from models to the main project
require("./models/Survey");
require("./models/UserInfo");
require("./services/passport"); // import service part to the main project
require("./Auth")

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express(); //first app

app.use(bodyParser.json()); //now any time a POST request or PUt request or anything else has a request body comes into our application to these middleware will parse the body then assign into the req.property body of incoming request object.
//cookie
app.use(
    cookieSession({ //cookieSession is not realy inheritenty passing data to passport it's just proccessing incoming request populating that req.session property that shown in route handler in passport.js and passport access the data that exists on req.session
        maxAge: 30 * 24 * 60 * 60 * 1000,  // it says "I want these cookie to last for 30 days before it automaticaly expires".
        keys:[keys.cookieKeys] // it allows us to specify multiple keys and if do randomly pick one to use to incript any givem cookie. and just allows to ride multiple cookie an in additional level of security.
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(
    session({
      resave: false,
      saveUninitialized: false, 
      secret: process.env.mongoDB_secret,
    })
  );
  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  
  app.use(cors());
  
  const Authentication = require("./routes/Auth");
  app.use("/auth", Authentication);

require('./routes/authRoutes')(app); // These working when we require the auth routes file it returns a functions thats what we export from the routes files on require statement right here, so this function will return immediatly to the callback function with the app object.
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV !== 'production') {
    // express will serve up production assets
    // like our main.js file or main.css file.!
    app.use(express.static('client/build'));

    // Express will serve up the index.html file
    // if it not recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// app.get('/', (req, res) => {
//     res.send({ hello: 'World' });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// localhost:5000

// https://accounts.google.com/signin/oauth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=1006500980018-q9h3akqjiiesv3hb122uab8b95t2hj9d.apps.googleusercontent.com&service=lso&o2v=2&flowName=GeneralOAuthFlow
