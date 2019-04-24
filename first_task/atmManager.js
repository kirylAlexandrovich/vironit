'use strict'

const cashMashine = require('./atm');
const queue = require('./queue');
const emitter = require('./event_emitter');

const atmManager = function () {
    this.state = () => {
        if (queue.peopleQuantity > 0) {
            console.log(cashMashine.stateStatus + ' status');
            cashMashine.stateStatus = 'busy';
            emitter.emit('humanComeToAtm');
            console.log(queue.peopleQuantity + ' ----------------------------');
        }
    };
};

module.exports = new atmManager;