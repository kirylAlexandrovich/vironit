import _ from 'lodash';
// import './style.css';

const app = require('./app');
const atmUi = require('./atmUI');
const Emitter = require('./eventEmitter');



Emitter.on('addATM', (i) => {
    atmUi.addAtm(i);
});

Emitter.on('changeCountPeople', (i, countPeople) => {
    atmUi.addHumanToAtm(i, countPeople);
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa ' + i + ' ' +countPeople);
});

Emitter.on('atmBusy', (i) => {
    atmUi.changeAtmStatus(i);
});

Emitter.on('addQueue', () => {
    atmUi.addQueue();
})

// Emitter.on('changeHumahsInQueue', (peopleQuantity) => {
//     atmUi.changeHumahsInQueue(peopleQuantity);
// });

app.addAtm(3000, 4000, 'firstAtm');
app.addAtm(3000, 3500, 'secondAtm');
app.addAtm(2000, 3000, 'thirdAtm')
app.addQueue(1000, 2000);
app.startApp();
