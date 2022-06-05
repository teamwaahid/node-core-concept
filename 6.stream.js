const fs = require('fs');
const path = require('path');
const http = require('http');

const directory = path.dirname(__filename);
const readPath = path.join(directory, 'try.txt');
const writePath = path.join(directory, 'write.txt');

const readStream = fs.createReadStream(readPath);
// const writeStream = fs.createWriteStream(writePath);

// readStream.on('data', chunk => {
//   writeStream.write(chunk);
// });

// readStream.pipe(writeStream);

const server = http.createServer((req, res) => {
  readStream.on('data', chunk => {
    res.write(chunk);
  });
  readStream.on('end', () => {
    res.end();
  });
});

server.listen(4000, 'localhost', () => {
  console.log('Server is Running');
});
