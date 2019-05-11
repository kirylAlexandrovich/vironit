const randomNum = require('./randomNum');

class Person {
    constructor() {
        this.randomTime = randomNum(1000, 5000);
    }

    getWorkTime() {
        return this.randomTime;
    }
}

module.exports = Person;
