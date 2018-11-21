const express = require('express');
const path = require('path');
const app = express();
const proxy = require('http-proxy-middleware');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
    app.use(proxy('/api', { target: process.env.API_URL }));
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);