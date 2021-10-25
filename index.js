const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({
        message: 'Hello world!',
        status: 'ok',
        createdAt: new Date().toISOString()
    }));
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});