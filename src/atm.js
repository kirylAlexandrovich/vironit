const Emitter = require('./eventEmitter');

class Atm extends Emitter {
    constructor() {
        super();
        this.countPeople = 0;
        this.atmStatus = 'free';
    }

    addHuman() {
        this.countPeople += 1;
    }

    setAtmStatusFree() {
        this.atmStatus = 'free';
        this.emit('atmIsFree');
        return this.atmStatus;
    }

    setAtmStatusBusy() {
        this.atmStatus = 'busy';
    }
}
module.exports = Atm;
