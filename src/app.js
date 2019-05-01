'use strict'

const CashMashine = require('./atm');
const Queue = require('./queue');
const AtmUi = require('./atmUI');
const QueueUi = require('./queueUi');
const randomNum = require('./randomNum');

class App {
    constructor() {
        this.atms = [];
        this.queue = [];
    }

    addQueue(min, max) {
        const queue = new Queue();
        queue.queueUi = new QueueUi();
        queue.min = min;
        queue.max = max;

        const rN = randomNum;
        const queueGenerator = (min, max) => {
            setTimeout(() => {
                queue.addHuman();
                queue.queueUi.changeHumahsQuantityInQueue(queue.peopleQuantity);
                queueGenerator(min, max);
                this.atms.find((el, index) => {
                    if (this.atms[index].atmStatus === 'free' && queue.peopleQuantity > 0) {
                            this.atms[index].emit('atmWorks', 0);
                    }
                });
            }, rN(min, max));
            
        };
        queueGenerator(min, max);
        queue.queueUi.addQueue();
        this.queue.push(queue);
    
    }

    addAtm(min, max) {
        const atm = new CashMashine();
        atm.atmUi = new AtmUi();
        atm.min = min;
        atm.max = max;

        atm.on('atmIsFree', () => {
            if (atm.atmStatus === 'free' && this.queue[0].peopleQuantity > 0) {
                atm.emit('atmWorks', 0);
            }
        })

        atm.on('atmWorks', (queueIndex) => {
            atm.setAtmStatusBusy();
            this.queue[queueIndex].removeHuman();
            setTimeout(() => {
                atm.atmUi.setAtmClassBusy();
                setTimeout(() => {
                    atm.setAtmStatusFree();
                    atm.addHuman()
                    atm.atmUi.addHumanToAtm(atm.countPeople);
                    atm.emit('atmIsFree');
                }, randomNum(atm.min, atm.max));
            }, 1000);
        })
        this.atms.push(atm);
        atm.atmUi.addAtm();
    }

    deleteAtm() {
        console.log(this.atms);
        this.atms[this.atms.length - 1].atmUi.deleteAtm();
        this.atms.pop();

    }

}

module.exports = new App;
