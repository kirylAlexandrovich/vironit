'use strict'

const Emitter = require('./eventEmitter');
const randomNum = require('./randomNum');
const atmUi = require('./atmUI');

class Atm extends Emitter {
    constructor() {
        super();
        this.countPeople = 0;
        this.atmStatus = 'free';
    };

    atmWorks(i) {
        console.log(i + ' ATM is busy ');
        this.atmStatus = 'busy';

        this.emit('removeHuman');

        setTimeout(() => {
            atmUi.changeAtmStatus(i);

            setTimeout(() => {
                this.atmStatus = 'free';
                this.countPeople++;
                atmUi.addHumanToAtm( i, this.countPeople);
                this.emit('atmIsFree', i);

            }, randomNum(this.min, this.max));
        }, 1000);
    };
};

module.exports = Atm;

