const Emitter = require('./eventEmitter');

class Queue extends Emitter {
    constructor(eventTable, on, emit) {
        super(eventTable, on, emit);
        this.peopleQuantity = 0;
    }

    addHuman() {
        this.peopleQuantity += 1;
    }

    removeHuman() {
        this.peopleQuantity -= 1;
    }
}

module.exports = Queue;
