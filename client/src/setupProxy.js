const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google", "/auth/register", "/auth/login", "/auth/logout"],
    createProxyMiddleware({
      target: "http://localhost:8000",
    })
  );
};