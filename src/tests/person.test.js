let person = require('../person');
person = new person();

test('Person return rundom number', () => {
   expect(typeof(person.getWorkTime())).toBe('number');
});