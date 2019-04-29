'use strict'

const Emitter = require('./eventEmitter');
const randomNum = require('./randomNum');
const App = require('./app');
const queue = require('./queue');
const atmUi = require('./atmUI');

class Atm {
    constructor() {
        // super();
        this.countPeople = 0;
        this.atmStatus = 'free';
    };

    atmWorks(i) {
        console.log(i + ' ATM is busy ');
        // Emitter.emit('atmBusy', i);
        
        this.atmStatus = 'busy';
        Emitter.emit('removeHuman');
        setTimeout(() => {
            atmUi.changeAtmStatus(i);

            setTimeout(() => {   
                this.atmStatus = 'free';
                this.countPeople++;
                atmUi.addHumanToAtm(i, this.countPeople);
                console.log(this.atmName + ' is free ' + this.countPeople);
                Emitter.emit('atmIsFree', i);

            }, randomNum(this.min, this.max));
        }, 1000);
    };
};

// Object.setPrototypeOf(Atm.prototype, Emitter.prototype);
// Atm.prototype = Object.create(emitter.prototype);

module.exports = Atm;

