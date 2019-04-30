'use strict'

class AtmUi {
    constructor() {
        this.atmContainer = document.getElementById('atmContainer');
    };

    addAtm(i) {

        const atm = document.createElement('div');
        atm.id = 'atm-' + i;
        atm.className = 'atm';
        atm.innerText = '0';

        // const closeButton = document.createElement('div');
        // closeButton.id = 'closeButton-' + i;
        // closeButton.className = 'atm-close-button';
        // closeButton.innerHTML = '&#10006;';
        // this.atmContainer.appendChild(closeButton);

        this.atmContainer.appendChild(atm);
    };

    deleteAtm(i) {
        const atm = document.getElementById('atm-' + i);
        atm.remove();
    }

    addHumanToAtm(i, countPeople) {
        const atm = document.getElementById('atm-' + i);
        atm.innerText = countPeople;
        atm.className = 'atm free-atm';
    };

    changeAtmStatus(i) {
        const atm = document.getElementById('atm-' + i);
        atm.className = 'atm busy-atm';
    };

};

module.exports = new AtmUi;
