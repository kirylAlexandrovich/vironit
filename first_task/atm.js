'use strict'

const emitter = require('./eventEmitter');
const randomNum = require('./randomNum');

class Atm {
    constructor() {
        this.countPeople = 0;
        this.atmStatus = 'free';
    };

    atmWorks(i) {
        console.log(this.atmName + ' is busy')
        this.atmStatus = 'busy';
        emitter.emit('removeHuman');
        setTimeout(() => {
            setTimeout(() => {
                this.atmStatus = 'free';
                this.countPeople++;
                console.log(this.atmName + ' ' + this.countPeople);
                emitter.emit('atmFree', i);
            }, randomNum(this.min, this.max));
        },1000);
    };
    atmListener() {
        this.atmStatus
    };
};

Atm.prototype.__proto__ = emitter;

module.exports = Atm;

// const atm = new Atm;

// atm.statusChange();
// atm.on('aaa', () => {
//     console.log('asdfgh');
// })
// atm.emit('aaa');
