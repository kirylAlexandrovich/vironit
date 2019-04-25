'use strict'

const cashMashine = require('./atm');
const queue = require('./queue');
const emitter = require('./event_emitter');

const atmManager = function () {
    this.i = 0;
    this.startWork = () => {
         if (cashMashine.atms[this.i].atmStatus === 'free') {
             console.log(cashMashine.atms[this.i].atmName + ' is besy');
            cashMashine.atms[this.i].atmStatus = 'busy';
            queue.peopleQuantity--;
            emitter.emit('humanComeToAtm', this.i);
            if (this.i < cashMashine.atms.length - 1){
                this.i++;
            }else{
                this.i = 0;
            };
        };
    };


};

module.exports = new atmManager;