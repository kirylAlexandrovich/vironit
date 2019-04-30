import _ from 'lodash';
import './style.css';

const app = require('./app');
const atmUi = require('./atmUI');
const Emitter = require('./eventEmitter');

function addAtm() {
    const minTime = document.getElementById('minTimeForAtm').value;
    const maxTime = document.getElementById('maxTimeForAtm').value;
    if(minTime === '' || maxTime === ''){
        alert('ENTER MIN AND MAX TIME IN SECONDS');
        return;
    };
    console.log(minTime, maxTime);
    app.addAtm(minTime * 1000, maxTime * 1000);
};

function deleteAtm() {
    app.deleteAtm();
};

const addAtmButton = document.getElementById('addAtm');
addAtmButton.addEventListener('click', addAtm);

const deleteAtmButton = document.getElementById('deleteAtm');
deleteAtmButton.addEventListener('click', deleteAtm);

app.addAtm(3000, 4000, 'firstAtm');
app.addQueue(1000, 2000);
app.startApp();
