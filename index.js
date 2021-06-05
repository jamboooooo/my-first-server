const path = require('path');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/about') {
        fs.readFile(path.resolve(__dirname, 'pages', 'about.html'), (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, {
                    'Content-type': 'text/html'
                })
                res.write(data)
                res.end();
            }
        })
    } else if (req.url === '/') {
        fs.readFile(path.resolve(__dirname, 'pages', 'index.html'), (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, {
                    'Content-type': 'text/html'
                })
                res.write(data)
                res.end();
            }
        })
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        })
        res.write('404 page not found')
        res.end()
    }

})

server.listen(3000)