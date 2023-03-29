// google authentication keys are store separatly in config folder because no one should access this keys, we can import from here to index.js
if (process.env.NODE_ENV === "production") {
    // we are in production - return the prod set of keys
    module.exports = require("./prod");
  } else {
    // we are in development - return the dev keys
    module.exports = require("./dev");
  }
