class QueueQi {
    constructor() {
        this.queueContainer = document.getElementById('queueContainer');
    }

    addQueue() {
        this.queue = document.createElement('div');
        this.queue.className = 'queue';
        this.queueContainer.appendChild(this.queue);
    }

    changeHumahsQuantityInQueue(peopleQuantity) {
        this.queue.innerText = peopleQuantity;
    }
}

module.exports = QueueQi;
