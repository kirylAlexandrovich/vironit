'use strict'

class QueueQi {

    constructor () {
        this.queueContainer = document.getElementById('queueContainer');
    };

    addQueue() {
        const queue = document.createElement('div');
        queue.id = 'queue';
        queue.className = 'queue';
        this.queueContainer.appendChild(queue);
    };

    changeHumahsInQueue(peopleQuantity) {
        const queue = document.getElementById('queue');
        queue.innerText = peopleQuantity;
    };
};

module.exports = new QueueQi;
