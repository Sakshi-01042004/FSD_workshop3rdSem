const{EventEmitter} = require('events');

class DomSimulation extends EventEmitter {}
const button = new DomSimulation();

// Create "click" event
button.on('click', () => {
    console.log("Button clicked!");
});
button.on('mouseover', () => {
    console.log("Mouse over the button!");
});
button.emit('click');
button.emit('mouseover');