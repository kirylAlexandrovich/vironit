'use strict'

const emitter = require('./eventEmitter'); 

class AtmUi {
    constructor() {
        this.atmContainer = document.getElementById('atmContainer');
        this.queueContainer = document.getElementById('queueContainer');
    }

    addAtm(i) {
        const atm = document.createElement('div');
        console.log('added atm')
        atm.id = 'atm-' + i;
        atm.className = 'atm';
        atm.innerText = '0';
        this.atmContainer.appendChild(atm);
    }

    addHumanToAtm(i, countPeople) {
        console.log('--------------------------------------' + countPeople);
        const atm = document.getElementById('atm-' + i);
        atm.innerText = countPeople;
        atm.className = 'atm free-atm';
    }

    changeAtmStatus(i) {
        const atm = document.getElementById('atm-' + i);
        atm.className = 'atm busy-atm';
    }

    addQueue() {
        const queue = document.createElement('div');
        queue.id = 'queue'
        queue.className = 'queue';
        this.queueContainer.appendChild(queue);
    }

    changeHumahsInQueue(peopleQuantity) {
        const queue = document.getElementById('queue');
        queue.innerText = peopleQuantity;
    }

}

module.exports = new AtmUi;

// const atmUi = new AtmUi;
// atmUi.addAtm();