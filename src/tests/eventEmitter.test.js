let emitter = require('../eventEmitter');
emitter = new emitter();

test('Event emitter test', () => {
    emitter.on('test', () => {
        return true;
    });
    expect(emitter.eventTable).toHaveProperty('test');
    expect(emitter.eventTable.test[0]()).toBe(true);

    let a = 0;
    emitter.on('test', () => {
        a = 1;
    });

    emitter.emit('test');
    expect(a).toBe(1);

    const f = emitter.on('test', () => {
        return 1;
    })

    f();

    expect(emitter.eventTable).not.toBe('test');
});