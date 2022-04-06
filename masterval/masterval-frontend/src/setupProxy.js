const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/courses", "/save","/delete",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:7054',
        secure: false
    });

    app.use(appProxy);
};
