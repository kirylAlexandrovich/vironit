'use strict'

const emitter = require('./event_emitter');
const cashMashine = require('./atm');
const queue = require('./queue');
const rundomNum = require('./randomNum');
const atmManager = require('./atmManager');

const App = function () {
    this.addAtm = function (min, max, atmName) {
        const countPeople = cashMashine.countPeople;
        const atmStatus = cashMashine.atmStatus;
        cashMashine.atms.push({ atmName, min, max, countPeople, atmStatus });
    };

    this.addQueue = function recursion(min, max) {
        setTimeout(function () {
            queue.peopleQuantity++;
            console.log('human in queue ' + queue.peopleQuantity);
            recursion(min, max);
        }, rundomNum(min, max));
    };

    this.start = function () {
        if(queue.peopleQuantity > 1){
            atmManager.startWork();
        };
    };

    emitter.on('humanComeToAtm', () => {
        let i = emitter.atmIndex;
        setTimeout(() => {
            cashMashine.atms[i].countPeople++;
            console.log(cashMashine.atms[i].atmName + ' is free. People done: ' + cashMashine.atms[i].countPeople)
            cashMashine.atms[i].atmStatus = 'free';
            emitter.emit('atmFree');
        }, rundomNum(cashMashine.atms[i].min, cashMashine.atms[i].max));
    });

    emitter.on('atmFree', () => {
        setTimeout(() => {
            atmManager.startWork();
        }, 1000);
    });
};
module.exports = new App;

