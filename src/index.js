import _ from 'lodash';
import './style.css';

const app = require('./app');

function addAtm() {
    // let minTime = document.getElementById('minTimeForAtm').value;
    // let maxTime = document.getElementById('maxTimeForAtm').value;
    // if (minTime === '' || minTime < 1 || maxTime === '' || maxTime < 1) {
    //     minTime = 1;
    //     maxTime = 2;
    // }
    app.addAtm();
}

const addAtmButton = document.getElementById('addAtm');
addAtmButton.addEventListener('click', addAtm);

const deleteOnClick = document.getElementById('atmContainer');
deleteOnClick.addEventListener('click', (event) => {
    if (event.target.className === 'atm-close-button') {
        app.deleteAtm(event.target.parentElement);
    }
});

app.addAtm(1000, 4000, _);
app.addQueue(1000, 2000);
