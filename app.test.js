
const test = require('node:test');
const assert = require('node:assert/strict');
const server = require('./app');

test('Homepage should return HTTP 200', async () => {
    await new Promise(resolve => {
        server.listen(0, '127.0.0.1', resolve);
    });

    try {
        const address = server.address();
        const response = await fetch(
            `http://127.0.0.1:${address.port}`
        );

        assert.equal(response.status, 200);

        const html = await response.text();

        assert.match(html, /Welcome to Jenkins CI\/CD!/);
        assert.match(html, /Version: 1\.0\.0/);
    } finally {
        await new Promise((resolve, reject) => {
            server.close(error => error ? reject(error) : resolve());
        });
    }
});
