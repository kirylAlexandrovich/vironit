'use strict'

const rundomNum = require('./randomNum');
const Emitter = require('./eventEmitter');

const queueUi = require('./ququeUi');

class Queue extends Emitter {

    constructor(eventTable, on, emit) {
        super(eventTable, on, emit);
        this.peopleQuantity = 0;
    };


    addHuman(min, max) {
        this.emit('changeHumahsInQueue');
        let self = this;
       
        this.peopleQuantity++;

        queueUi.changeHumahsInQueue(this.peopleQuantity);
        console.log('human in queue ' + this.peopleQuantity);

        setTimeout(function () {
            self.addHuman(min, max);
        }, rundomNum(min, max));
    };

    removeHuman() {
        
        this.peopleQuantity--;

        queueUi.changeHumahsInQueue(this.peopleQuantity);
    };
};

module.exports = Queue;
