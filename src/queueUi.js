'use strict'

class QueueQi {

    constructor () {
        this.queueContainer = document.getElementById('queueContainer');
        this.queue;
    }

    addQueue() {
        this.queue = document.createElement('div');
        // queue.id = 'queue';
        this.queue.className = 'queue';
        this.queueContainer.appendChild(this.queue);
    }

    changeHumahsQuantityInQueue(peopleQuantity) {
        // const queue = document.getElementById('queue');
        this.queue.innerText = peopleQuantity;
    }
}

module.exports = QueueQi;
