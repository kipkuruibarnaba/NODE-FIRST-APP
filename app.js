const http = require('http');

// function rqListener(req, res) {
//     console.log(req);
// };
// const server = http.createServer(rqListener);
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text / html ');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello my first Node JS App</h1></body>')
    res.write('</title>');
    res.write('</html>');
    res.end();
    // process.exit();
});
server.listen(3000);