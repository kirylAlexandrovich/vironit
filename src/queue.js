const Emitter = require('./eventEmitter');
const Person = require('./person');

class Queue extends Emitter {
    constructor(eventTable, on, emit) {
        super(eventTable, on, emit);
        this.personQueue = [];
    }

    addHuman() {
        this.personQueue.push(new Person());
    }

    removeHuman() {
        return this.personQueue.shift();
    }
}

module.exports = Queue;
