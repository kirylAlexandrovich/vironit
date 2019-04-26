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
        console.log()

        emitter.on('changeHumahsInQueue', () => {
            let i = 0;
            if (this.atms[i].atmStatus === 'free') {
                this.atms[i].atmWorks(i);
                if (i < this.atms.length - 1) {
                    i++;
                } else {
                    i = 0;
                };
            };
        })


    };


};

App.prototype.__proto__ = Queue;

const app = new App;
app.addAtm(1000, 2000, 'first-ATM');
app.addAtm(1500, 2000, 'second-ATM');
// app.addAtm(3000, 5000, 'third-ATM');
app.addQueue(1000, 2000);
app.startApp()

module.exports = new App;


// this.queue[0].addHuman(this.queue[0].min, this.queue[0].max);

//         this.atms.forEach((item, i) => {
//             console.log(this.queue[0].peopleQuantity);
//             if (this.queue[0].peopleQuantity > 0 && item.atmStatus === 'free') {
//                 item.atmWorks(i);
//             }
//         });        

//         emitter.on('atmFree', () => {
//             let i = emitter.emitParams[0];
//             this.atms[i].atmWorks(i);
//         });
//         emitter.on('removeHuman', () => {
//             this.queue[0].removeHuman();
//         })
