import _ from 'lodash';
import './style.css';

const app = require('./app');

function addAtm() {
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
