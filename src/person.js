const rundomNum = require('./randomNum');

class Person {
    constructor() {
        this.rundomTime = rundomNum(1000, 5000);
    }

    getWorkTime() {
        return this.rundomTime;
    }
}

module.exports = Person;
