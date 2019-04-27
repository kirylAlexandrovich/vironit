'use strict'

const emitter = require('./eventEmitter');
const randomNum = require('./randomNum');

class Atm {
    constructor() {
        this.countPeople = 0;
        this.atmStatus = 'free';
    };

    atmWorks(i) {
        console.log(this.atmName + ' is busy ' + this.atmStatus + '---------------------');
        this.atmStatus = 'busy';
        emitter.emit('removeHuman');
        setTimeout(() => {
            setTimeout(() => {
                this.atmStatus = 'free';
                this.countPeople++;
                console.log(this.atmName + ' is free ' + this.countPeople);
                emitter.emit('atmIsFree', i);
            }, randomNum(this.min, this.max));
        },1000);
    };
    atmListener() {
        this.atmStatus
    };
};

Atm.prototype.__proto__ = emitter;

module.exports = Atm;
