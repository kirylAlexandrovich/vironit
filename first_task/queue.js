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
        emitter.emit('changeHumahsInQueue', {a: 1});
        setTimeout(function () {
            self.addHuman(min, max);
        }, rundomNum(min, max));
    };

    removeHuman() {
        this.peopleQuantity--;
        this.removedPeople++;
        console.log('remove human', this.peopleQuantity);
    };
};

module.exports = Queue;
