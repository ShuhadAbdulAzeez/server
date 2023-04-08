const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google", "/auth/register", "/auth/login"],
    createProxyMiddleware({
      target: "http://localhost:8000",
    })
  );
};