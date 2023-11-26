 exports.sum = (a,b)=>{
    return a+b;
}

exports.diff = (a, b)=>{
    return a-b;
}
 
/*Event Emitters: Node.js heavily uses event-driven architecture. The EventEmitter class in the events module allows objects to emit named events that cause functions called "listeners" to be called.
*/

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('event', (arg) => {
  console.log('Event occurred:', arg);
});

emitter.emit('event', 'some data');
