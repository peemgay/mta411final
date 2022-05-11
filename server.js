const fs = require('fs');
const http = require('http');
const hostname = 'localhost';
const port = 3306;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(writeWebJson);
    res.end();
});

// readMsg().then((msg) => writeWebJson = out);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})