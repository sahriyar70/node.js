// file: event-example.js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();


emitter.on('user:signup', (user) => {
  console.log(`নতুন ব্যবহারকারী সাইনআপ: ${user.name}, email: ${user.email}`);
  
});


emitter.on('user:signup', (user) => {
  console.log(`Analytics: user ${user.id} added at ${new Date().toISOString()}`);
});

function signupUser(user) {
  
  
  emitter.emit('user:signup', user);
}


signupUser({ id: 123, name: 'Al Sahriyar', email: 's@example.com' });
