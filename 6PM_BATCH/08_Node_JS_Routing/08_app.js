const http = require('http');
const fs = require('fs');
const path = require('path');
const router = require('./router/appRouting');

const hostname = '127.0.0.1';
const port = 3000;

let server = http.createServer((request,response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type','text/html');
    let url = request.url;
    // Map the Routes
    router.mapRoutes(url, response);
});

server.listen(port,hostname, () => {
    console.log(`Server is Started at http://${hostname}:${port}`);
});