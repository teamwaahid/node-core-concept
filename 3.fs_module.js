// const path = require('path');
const fs = require('fs');

// const pat = path.dirname(__filename);
// console.log(pat);

// const text = fs.open(path.join(pat, 'try.txt'), 'r', (err, fd) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(fd);

//     fs.close(fd, err => {
//       if (err) {
//         console.log(err.message);
//       } else {
//         console.log('successfully closed');
//       }
//     });
//   }
// });

// const text = fs.open(pat);
// console.log(text);

// fs.appendFile(text, 'Testing new line', err => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Appended');
//   }
// });
var path = require('path');

var directories = path.dirname(__filename);
console.log(directories);
const newDir = path.join(directories, 'try.txt');
console.log(newDir);

fs.appendFile(newDir, 'New line from FS Module', err => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('Successfully appeded');
  }
});
