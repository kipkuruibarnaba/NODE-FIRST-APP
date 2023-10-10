const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text / html ');
        res.write('<html>');
        res.write('<head><title>My first Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message" /> <button type="submit">Send</button> </form></body>')
        res.write('</title>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);

        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
        });
    }
    res.setHeader('Content-Type', 'text / html ');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello my first Node JS App</h1></body>')
    res.write('</title>');
    res.write('</html>');
    res.end();
    // process.exit();
});

// function rqListener(req, res) {
//     console.log(req);
// };
// const server = http.createServer(rqListener);

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);
//     res.setHeader('Content-Type', 'text / html ');
//     res.write('<html>');
//     res.write('<head><title>My first Page</title></head>');
//     res.write('<body><h1>Hello my first Node JS App</h1></body>')
//     res.write('</title>');
//     res.write('</html>');
//     res.end();
//     // process.exit();
// });
server.listen(3000);