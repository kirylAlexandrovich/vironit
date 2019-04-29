'use strict'

const Emitter = require('./eventEmitter');
const CashMashine = require('./atm');
const Queue = require('./queue');
const atmUi = require('./atmUI');

class App {
    constructor() {
        // super();
        this.atms = [];
        this.queue;
    }

    addQueue(min, max) {
        const newQueue = new Queue;
        const { peopleQuantity, addHuman, removeHuman } = newQueue;
        this.queue = { peopleQuantity, min, max, addHuman, removeHuman };
        Emitter.emit('addQueue');
    };

    addAtm(min, max, atmName) {
        const atm = new CashMashine;
        const { countPeople, atmStatus, atmWorks } = atm;
        this.atms.push({ atmName, min, max, countPeople, atmStatus, atmWorks });
        atmUi.addAtm(this.atms.length - 1);
        // Emitter.emit('addATM', this.atms.length - 1);
    };

    

    startApp() {
        this.queue.addHuman(this.queue.min, this.queue.max);

        Emitter.on('removeHuman', () => {
            this.queue.removeHuman();
        });

        Emitter.on('changeHumahsInQueue', () => {
            this.atms.find((el, index) => {
                if (this.atms[index].atmStatus === 'free') {
                    if(this.queue.peopleQuantity > 0) {
                        this.atms[index].atmWorks(index);
                    };
                };
            });
        });

        Emitter.on('atmIsFree', (i) => {
            if(this.queue.peopleQuantity > 0 ) {
                // Emitter.emit('atmBusy', i);
                this.atms[i].atmWorks(i);
            }
        });
    };
};

module.exports = new App;
