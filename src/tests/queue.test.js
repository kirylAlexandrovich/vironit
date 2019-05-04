let queue = require('../queue');
queue = new queue();

test('Add and remove person in queue', () => {
    queue.addHuman();
    expect(queue.personQueue).toHaveLength(1);
    queue.addHuman();
    expect(queue.personQueue).toHaveLength(2);
    queue.removeHuman();
    expect(queue.personQueue).toHaveLength(1);
});