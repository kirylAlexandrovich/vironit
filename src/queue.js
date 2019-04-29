'use strict'

const rundomNum = require('./randomNum');
const CashMashine = require('./atm');
const app = require('./app');
const emitter = require('./eventEmitter');
const atmUi = require('./atmUI');

class Queue {
    constructor() {
        // super();
        this.peopleQuantity = 0;
    };

    addHuman(min, max) {
        let self = this;
        this.peopleQuantity++;
        atmUi.changeHumahsInQueue(this.peopleQuantity);
        console.log('human in queue ' + this.peopleQuantity);
        emitter.emit('changeHumahsInQueue', this.peopleQuantity);
        
        setTimeout(function () {
            self.addHuman(min, max);
        }, rundomNum(min, max));
    };

    removeHuman() {
        this.peopleQuantity--;
        // emitter.emit('changeHumahsInQueue', this.peopleQuantity);
        atmUi.changeHumahsInQueue(this.peopleQuantity);
        // console.log('remove human', this.peopleQuantity);
    };
};

module.exports = Queue;
