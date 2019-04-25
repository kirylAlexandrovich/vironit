'use strict'

const EventEmitter = function () {
    this.eventTable = {};
    this.atmIndex;
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
    this.atmIndex = params[0];
    if (this.eventTable[event]) {
        this.eventTable[event].forEach((item) => {
            item.apply(this, params);
        });
    };
};

module.exports = new EventEmitter;

// const test = new EventEmitter();
// const f = test.on('one', () => { console.log('Hello') });
// test.on('one', () => { console.log('world') });
// test.on('two', () => { console.log('hay') });
// f();
// test.emit('two');
// test.emit('one');