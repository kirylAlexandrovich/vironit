const app = require('../app');

document.body.innerHTML = `<div id="addAtm" class="buttons"><span>ADD ATM</span></div>
                               <div id="atmContainer" class="atm-container"></div>
                               <div class="queue-container" id="queueContainer"></div>`;
jest.useFakeTimers();

test('Add ATM and auto delete ATM', () => {

    app.addAtm();
    expect(app.atms.length).toBe(1);

    jest.runOnlyPendingTimers();
    expect(app.atms.length).toBe(0);
});


test('Delete ATM', () => {
    app.addAtm();
    app.deleteAtm();
    expect(app.atms.length).toBe(1);

    app.deleteAtm(app.atms[0].atmUi.atm.parentElement);
    expect(app.atms.length).toBe(0);
});

test('Add queue and person to queue', () => {
    app.addQueue(1000, 2000);
    expect(app.queue.length).toBe(1);

    jest.runOnlyPendingTimers();
    expect(app.queue[0].personQueue.length).toBe(1);

    jest.runOnlyPendingTimers();
    expect(app.queue[0].personQueue.length).toBe(2);
});

test('Add ATM and work ATM', () => {
    app.addAtm();
    expect(app.atms.length).toBe(1);

    jest.runOnlyPendingTimers();
    expect(app.atms[0].atmStatus).toBe('busy');

    jest.runOnlyPendingTimers();
    jest.runOnlyPendingTimers();
    expect(app.atms[0].countPeople).toBe(1);
});

test('Test auto adding ATM', () => {
    const addAtmButton = document.getElementById('addAtm');
    const mockCallBack = jest.fn();
    addAtmButton.onclick = mockCallBack;

    app.queue[0].personQueue.length = 11;
    jest.runOnlyPendingTimers();

    expect(mockCallBack.mock.calls.length).toEqual(1);
});

test('Test ATM timer', () => {
    jest.clearAllTimers();
    app.queue[0].personQueue.length = 0;
    app.addAtm();
    jest.runOnlyPendingTimers();

    expect(app.atms.length).toBe(1);
});
