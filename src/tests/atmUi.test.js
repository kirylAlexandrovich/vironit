let atmUi = require('../atmUI');
atmUi = new atmUi();
beforeEach(() => {
    document.body.innerHTML = `<div id="atmContainer" class="atm-container"></div>`;
    

    atmUi.addAtm();
});

test('Test added ATM', () => {

    expect(document.querySelector('.atm-cont')).toBeTruthy();
    expect(document.querySelector('.atm')).toBeTruthy();
    expect(document.querySelector('.atm-close-button')).toBeTruthy();
});

test('Delete ATM', () => {
    atmUi.deleteAtm();

    expect(document.querySelector('.atm-cont')).not.toBeTruthy();
    expect(document.querySelector('.atm')).not.toBeTruthy();
    expect(document.querySelector('.atm-close-button')).not.toBeTruthy();
});

test('Change ATM status to free', () => {
    atmUi.addHumanToAtm();

    expect(document.querySelector('.atm-free')).toBeTruthy();
    expect(document.querySelector('.atm atm-free').innerText).toBe('1');
});

test('Change ATM status to busy', () => {
    atmUi.setAtmClassBusy();

    expect(document.querySelector('.atm-busy')).toBeTruthy();
})
