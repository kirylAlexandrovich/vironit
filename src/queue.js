'use strict'

const rundomNum = require('./randomNum');
const Emitter = require('./eventEmitter');

class Queue extends Emitter {

    constructor(eventTable, on, emit) {
        super(eventTable, on, emit);
        this.peopleQuantity = 0;
    }


    addHuman(min, max) {
       
        this.peopleQuantity += 1;

    }

    removeHuman() {
        
        this.peopleQuantity--;

    }
}

module.exports = Queue;
