const http = require('http');
const fs = require('fs');
const requestHandler = (req, res) => {
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
            // console.log(message);
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text / html ');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>Hello my first Node App</h1></body>')
    res.write('</title>');
    res.write('</html>');
    res.end();
};
module.exports = {
    handler: requestHandler,
    someText: 'Hard coded textdddd'
};


// function MinWindowSubstring(strArr) {
//     var min = null;
//     var n = strArr[0];
//     var k = strArr[1];
//     for (var i = 0; i < n.length; i++) {
//         for (var j = i + 1; j <= n.length; j++) {
//             var sub = n.slice(i, j);
//             if (checkK(sub, k)) {
//                 if (min === null || sub.length < min.length) {
//                     min = sub;
//                 }
//             }
//         }
//     }
//     return min;
// }

// function checkK(sub, k) {
//     var h = k.split('');
//     for (var i = 0; i < sub.length; i++) {
//         var char = sub[i];
//         var index = h.indexOf(char);
//         if (index > -1) {
//             h.splice(index, 1);
//         }
//     }
//     if (h.length === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }