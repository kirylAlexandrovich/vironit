'use strict'

const Emitter = require('./eventEmitter');

class Atm extends Emitter {
    constructor() {
        super();
        this.countPeople = 0;
        this.atmStatus = 'free';
    }

    addHuman() {
        this.countPeople++;
    }

    setAtmStatusFree() {
        this.atmStatus = 'free';
    }

    setAtmStatusBusy() {
        this.atmStatus = 'busy';
    }

}

module.exports = Atm;

