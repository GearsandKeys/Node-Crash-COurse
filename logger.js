const EventEmitter = require('events');
const uuid = require('uuid'); //creates random universal id
//A universally unique identifier (UUID) is a 128-bit number used to identify information in computer systems

class Logger extends EventEmitter {
    log(msg) {
        //Call Event
        this.emit('message', {id: uuid.v4(), msg });
    }
}

//module.exports = Logger;

//When exporting it, this is what I had in index.js

/*
const logger = new Logger();
logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World.');
//Called Listener { id: '397e84bb-969c-4f88-937a-4d9204ce488d', msg: 'Hello World.' }
logger.log("Hi");
//Called Listener { id: 'a1e7533c-4471-49b4-a82e-f38be11a1e29', msg: 'Hi' }
*/