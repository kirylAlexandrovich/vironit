'use strict'

class EventEmitter {
    constructor() {
        this.eventTable = {};
    };

    on(event, handler) {

        if (!this.eventTable[event]) {
            this.eventTable[event] = [];
        };
        this.eventTable[event].push(handler);

        function unsubscribe() {
            this.eventTable[event] = this.eventTable[event].filter((item) => item != handler);
        };
        return unsubscribe.bind(this);
    }

    emit(event, ...params) {
        if (this.eventTable[event]) {
            this.eventTable[event].forEach((item) => {
                item.apply(this, params);
            });
        };
    };
};



module.exports = EventEmitter;
