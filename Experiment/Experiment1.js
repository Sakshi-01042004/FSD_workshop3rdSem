
const EventEmitter = require('events');

// Create an EventEmitter object
const event = new EventEmitter();

// Create greet event
event.on('greet', () => {
    console.log("Hello! Welcome to Node.js.");
});

// Create exit event
event.on('exit', () => {
    console.log("Exiting the program...");
});

// Trigger events
event.emit('greet');
event.emit('exit');
