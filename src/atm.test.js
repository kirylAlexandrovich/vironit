const atm = require('./atm');
const obj = new atm(); 

test('Change ATM status', () => {
    expect(obj.setAtmStatusFree()).toBe('free');
});