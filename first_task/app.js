'use strict'

const emitter = require('./eventEmitter');
const CashMashine = require('./atm');
const Queue = require('./queue');


class App {
    constructor() {
        this.atms = [];
        this.queue;
    }

    addQueue(min, max) {
        const newQueue = new Queue;

        const { peopleQuantity, addHuman, removeHuman } = newQueue;
        this.queue = { peopleQuantity, min, max, addHuman, removeHuman };
    };

    addAtm(min, max, atmName) {
        const atm = new CashMashine;
        const { countPeople, atmStatus, atmWorks } = atm;
        this.atms.push({ atmName, min, max, countPeople, atmStatus, atmWorks });
        // console.log(this.atms);
    };

    startApp() {
        this.queue.addHuman(this.queue.min, this.queue.max);

        emitter.on('removeHuman', () => {
            this.queue.removeHuman();
        });

        emitter.on('changeHumahsInQueue', () => {
            this.atms.find((el, index) => {
                if (this.atms[index].atmStatus === 'free') {
                    if(this.queue.peopleQuantity > 0) {
                        console.log(55555555555555555)
                        this.atms[index].atmWorks(index);
                    };
                };
            });
        });

        emitter.on('atmIsFree', (i) => {
            if(this.queue.peopleQuantity > 0 ) {
                console.log(i);
                this.atms[i].atmWorks(i);
            }
        });
    };
};

module.exports = new App;
