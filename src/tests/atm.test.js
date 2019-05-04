let atm = require('../atm');
atm = new atm(); 

test('Change ATM count people', () => {
    atm.addHuman();
    expect(atm.countPeople).toEqual(1);
    atm.addHuman();
    expect(atm.countPeople).toEqual(2);
});

test('Change ATM status free', () => {
    atm.setAtmStatusFree();
    expect(atm.atmStatus).toEqual('free');
});

test('Change ATM status busy', () => {
    atm.setAtmStatusBusy();
    expect(atm.atmStatus).toEqual('busy');
});