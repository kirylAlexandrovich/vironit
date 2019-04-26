'use strict'

const rundomNum = require('./randomNum');
const emitter = require('./eventEmitter');

class Queue {
    constructor() {
        this.peopleQuantity = 0;
    };

    addHuman(min, max) {
        let self = this;
        this.peopleQuantity++;

        console.log('human in queue ' + this.peopleQuantity);
        emitter.emit('changeHumahsInQueue');
        setTimeout(function () {
            self.addHuman(min, max);
        }, rundomNum(min, max));
    };

    removeHuman() {
        this.peopleQuantity--;
        console.log('remove human', this.peopleQuantity);
    };
}
Queue.prototype.__proto__ = emitter;

module.exports = Queue;

// const queue = new Queue;
// queue.addHuman(1000, 2000);

