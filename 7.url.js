const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method.toLowerCase();
  const path = parsedUrl.pathname;
  const queryObj = parsedUrl.query;
  const reqHeader = req.headers;
  const bufferObj = [];
  let body;

  req.on('data', chunk => {
    bufferObj.push(chunk);
  });
  req.on('end', chunk => {
    body = Buffer.concat(bufferObj).toString();
    console.log(body);
    res.end();
  });
});

server.listen(5000, 'localhost', () => {
  console.log('Server Is running');
});
