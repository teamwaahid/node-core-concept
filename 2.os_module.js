const os = require('os');

const mem = os.freemem();
// console.log(mem);

const mem2 = os.totalmem();
// console.log(mem2);

const mem3 = os.cpus();
console.log(mem3);
