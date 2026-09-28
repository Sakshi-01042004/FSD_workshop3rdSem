const{EventEmitter} = require('events');

const emitter = new EventEmitter();

emitter.on('login',()=>{
    console.log("Student log successfully")
});
emitter.on('assign',()=>{
    console.log("Assignment Submitted")
});
emitter.on('logout',()=>{
    console.log("Student logged out")
});
emitter.on('exit',()=>{
    console.log("Exiting application")
});

emitter.emit('login');
emitter.emit('assign');
emitter.emit('logout');
emitter.emit('exit');


