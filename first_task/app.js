'use strict'

const emitter = require('./event_emitter');
const cashMashine = require('./atm');
const queue = require('./queue');
const rundomNum = require('./randomNum');
const atmManager = require('./atmManager');

(function () {
    function queueGenerator(m, n) {
        setTimeout(function () {          
            queue.peopleQuantity++;
            console.log('addHuman' + queue.peopleQuantity);

            atmManager.state();
            queueGenerator(m, n);
        }, rundomNum(m, n));
    };
    queueGenerator(2000, 3000);
})();

emitter.on('humanComeToAtm', () => {
    console.log(queue.peopleQuantity + ' humanComeToAtm');
    queue.peopleQuantity--;
    setTimeout(function () {
        console.log('humanGone');
        emitter.emit('atmFree');
    }, rundomNum(1000, 2000));
    
});

emitter.on('atmFree', () => {
    setTimeout(() => {
        atmManager.state();
    }, 1000);
});


const atmOne = cashMashine;
const atmTwo = cashMashine;


// setInterval(atmTwo.state, 1100);
// atmTwo.state('secondAtm');
