'use strict'

const EventEmitter = function () {
    this.eventTable = {};
    this.emitParams;
};

EventEmitter.prototype.on = function (event, handler) {
    if (!this.eventTable[event]) {
        this.eventTable[event] = [];
    };
    this.eventTable[event].push(handler);

    function unsubscribe() {
        this.eventTable[event] = this.eventTable[event].filter((item) => item != handler);
    };
    return unsubscribe.bind(this);
}

EventEmitter.prototype.emit = function (event, ...params) {

    if (this.eventTable[event]) {
        this.eventTable[event].forEach((item) => {
            item.apply(this, params);
        });
    };
};

module.exports = new EventEmitter;
