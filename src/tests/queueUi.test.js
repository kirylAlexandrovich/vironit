let queueUi = require('../queueUi');


test('Adding queue to DOM', () => {

    document.body.innerHTML = `<div class="queue-container" id="queueContainer"></div>`;
    queueUi = new queueUi();

    queueUi.addQueue();
    expect(document.querySelector('.queue')).toBeTruthy();

    expect(document.querySelector('.queue').nodeName).toEqual("DIV");

    queueUi.changeHumahsQuantityInQueue('5');
    
    expect(document.querySelector('.queue').innerText).toBe('5');
});