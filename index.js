const express = require('express');
const logger = require('morgan');

const app = express();
app.use(logger('dev'));

app.use('/', (req, res) => {
    res.status(200).send("hello world");
});

const port = process.env.PORT || 3000;
app.listen(port);

// const http = require('http');

// const hostname = 'localhost';
// const port = 8080;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });