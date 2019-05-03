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
        let state = 0;

        const rN = randomNum;
        const queueGenerator = (m, n) => {
            setTimeout(() => {
                queue.addHuman();
                queue.queueUi.changeHumahsQuantityInQueue(queue.personQueue.length);
                queueGenerator(m, n);
                this.atms.find((el, index) => {
                    if (this.atms[index].atmStatus === 'free' && queue.personQueue.length > 0) {
                        this.atms[index].emit('atmWorks', 0);
                    }
                    return false;
                });
                if (queue.personQueue.length > 10 && state === 0) {
                    const addAtmButton = document.getElementById('addAtm');
                    addAtmButton.click();
                    state = 1;
                    setTimeout(() => { state = 0; }, 5000);
                }
            }, rN(m, n));
        };

        queueGenerator(min, max);
        queue.queueUi.addQueue();
        this.queue.push(queue);
    }

    addAtm() {
        const atm = new CashMashine();
        atm.atmUi = new AtmUi();
        atm.timer = (maxFreeTime) => {
            const timerStart = atm.countPeople;
            setTimeout(() => {
                if (timerStart === atm.countPeople && atm.atmStatus === 'free') {
                    this.atms.find((el, index) => {
                        if (this.atms[index] === atm) {
                            atm.atmUi.deleteAtm();
                            this.atms.splice(index, 1);
                            return true;
                        }
                        return false;
                    });
                }
            }, maxFreeTime);
        };

        atm.on('atmIsFree', () => {
            if (this.atms.length > 0 && atm.atmStatus === 'free' && this.queue[0].personQueue.length > 0) {
                atm.emit('atmWorks', 0);
            }
        });

        atm.on('atmWorks', (queueIndex) => {
            atm.setAtmStatusBusy();
            const workTime = this.queue[queueIndex].removeHuman();
            setTimeout(() => {
                atm.atmUi.setAtmClassBusy();
                setTimeout(() => {
                    atm.setAtmStatusFree();
                    atm.addHuman();
                    atm.atmUi.addHumanToAtm(atm.countPeople);
                    atm.timer(workTime.getWorkTime() * 2);
                }, workTime.getWorkTime());
            }, 1000);
        });
        atm.timer(10000);
        this.atms.push(atm);
        atm.atmUi.addAtm();
    }

    deleteAtm(domElement) {
        this.atms.find((el, index) => {
            if (el.atmUi.atm.parentElement === domElement) {
                this.atms[index].atmUi.deleteAtm();
                this.atms.splice(index, 1);
                return true;
            }
            return false;
        });
    }
}

module.exports = new App();
