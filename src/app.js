'use strict'

const CashMashine = require('./atm');
const Queue = require('./queue');
const atmUi = require('./atmUI');
const queueUi = require('./ququeUi');

class App {
    constructor() {
        this.atms = [];
        this.queue = [];
    }

    addQueue(min, max) {
        const queue = new Queue;
        queue.min = min;
        queue.max = max;

        queue.on('changeHumahsInQueue', () => {
            this.atms.find((el, index) => {
                if (this.atms[index].atmStatus === 'free') {

                    if (this.queue[0].peopleQuantity > 0) {
                        this.atms[index].atmWorks(index);
                    };
                };
            });
        });

        this.queue.push(queue);

        queueUi.addQueue();
    };

    addAtm(min, max) {
        const atm = new CashMashine();
        atm.min = min;
        atm.max = max;
        atm.on('atmIsFree', (i) => {
            if (this.queue[0].peopleQuantity > 0) {
                console.log('atm is free check people quantity ' + i)
                atm.atmWorks(i);
            };
        });

        atm.on('changeHumanInQueue', () => {
            if (atm.atmStatus === 'free') {
                atm.atmWorks();
            };
        });

        atm.on('removeHuman', () => {
            this.queue[0].removeHuman();
        });

        this.atms.push(atm);
        atmUi.addAtm(this.atms.length - 1);

    };

    deleteAtm() {
        this.atms.pop();
        atmUi.deleteAtm(this.atms.length);
    };

    startApp() {
        this.queue[0].addHuman(this.queue[0].min, this.queue[0].max);

        
    };
};

module.exports = new App;
