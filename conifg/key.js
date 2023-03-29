// google authentication keys are store separatly in config folder because no one should access this keys, we can import from here to index.js
if (process.env.NODE_ENV === "production") {
<<<<<<< HEAD
    // we are in production - return the prod set of keys
    module.exports = require("./prod");
  } else {
    // we are in development - return the dev keys
    module.exports = require("./dev");
  }
=======
  // we are in production - return the prod set of keys
  module.exports = require("./prod");
} else {
  // we are in development - return the dev keys
  module.exports = require("./dev");
}
>>>>>>> 2a0a9647e1aba31d698beb4c036459602a716b9f
