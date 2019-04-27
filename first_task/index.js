'use strict'

const app = require('./app');

app.addAtm(2000, 4000, 'firstAtm');
app.addAtm(2500, 3500, 'secondAtm');
app.addQueue(2000, 2500);
app.startApp();