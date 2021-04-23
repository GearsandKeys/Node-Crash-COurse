/*
Events: 
Much of the Node.js core API is built around an idiomatic asynchronous event-driven 
architecture in which certain kinds of objects (called "emitters") emit named events 
that cause Function objects ("listeners") to be called.
*/

const EventEmitter = require('events');
// Create class
class MyEmitter extends EventEmitter { }

// Init Object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => console.log("Event fired!"));

// Init event
myEmitter.emit('event');