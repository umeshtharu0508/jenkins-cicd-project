
const http = require('node:http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
        <h1>Welcome to Jenkins CI/CD!</h1>
        <p>My First Node.js Application</p>
        <p>Version: 1.0.0</p>
    `);
});

if (require.main === module) {
    server.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = server;
