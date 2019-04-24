'use strict'

const emitter = require('./event_emitter');
const rundomNum = require('./randomNum');
const queue = require('./queue');

const Atm = function () {
    this.countPeople = 0;
    this.stateStatus = 'free';
}

module.exports = new Atm;
