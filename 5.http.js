const http = require('http');

const server = http.createServer((req, res) => {
  //   console.log(req.method);
  //   console.log(req.url);
  if (req.method.toLowerCase() === 'get' && req.url === '/') {
    res.writeHead(200, 'KO', { 'content-type': 'text/plain' });
    res.write('This is Home Page');
    res.end();
  } else if (req.method.toLowerCase() === 'get' && req.url === '/about') {
    res.writeHead(200, 'KO', { 'content-type': 'text/html' });
    res.write('<h1>This is About Page</h1>');
    res.end();
  } else {
    res.writeHead(200, 'KO', { 'content-type': 'text/plain' });
    res.write('404 Page Not Found');
    res.end();
  }
});

server.listen(8000, 'localhost', () => {
  console.log('server is running on port 8000');
});
