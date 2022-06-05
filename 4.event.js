const Event = require('events');
const events = new Event();

events.on('onMyClick', p => {
  console.log(p);
});

events.emit('onMyClick', {
  name: 'Wahid Hasan',
  title: 'Programmer',
});
