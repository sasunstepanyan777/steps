const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    const data = JSON.stringify({
        data: [1, 2, 3]
    });
    res.write(data);
    res.end();
});

server.listen(PORT, 'localhost', () => {
    `Server listenin on ${PORT}`;
})