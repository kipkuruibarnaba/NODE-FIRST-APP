const http = require('http');
const fs = require('fs');
const routes = require('./routes.js')

console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);