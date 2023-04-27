const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google", "/auth", "/user"],
    createProxyMiddleware({
      target: "http://localhost:8000",
    })
  );
};