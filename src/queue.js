const Emitter = require('./eventEmitter');
const Person = require('./person');

class Queue extends Emitter {
    constructor(eventTable, on, emit) {
        super(eventTable, on, emit);
        // this.peopleQuantity = 0;
        this.personQueue = [];
    }

    addHuman() {
        // this.peopleQuantity += 1;
        this.personQueue.push(new Person());
    }

    removeHuman() {
        // this.peopleQuantity -= 1;
        return this.personQueue.shift();
    }
}

module.exports = Queue;
