const path = require('path');

const pat = path.dirname(__filename);
// console.log(pat);

const pat2 = path.join(pat, 'wahid', 'hasan');
// console.log(pat2);

const pat3 = path.parse(pat2);
console.log(pat3);
