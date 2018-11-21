const express = require('express');
const path = require('path');
const app = express();
const proxy = require('http-proxy-middleware');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
    // Proxy
    app.use(proxy('/api', { target: "https://internet-store-api.herokuapp.com", changeOrigin: true}));

    // Express server
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT);