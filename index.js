const express = require('express');
const logger = require('morgan');
const routes = require('./routes/routes');

const app = express();
app.use(logger('dev'));

app.use('/api', routes);

//gets static files from the public directory
app.use(express.static('public', {
    extensions: ['html', 'htm']
}));

const PORT = process.env.PORT || 3000;
const HOST = 'localhost'; //so it works on chrome
app.listen(PORT, HOST, () => console.log(`Listening on port ${PORT}...`));
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