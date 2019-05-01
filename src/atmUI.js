'use strict'

class AtmUi {
    constructor() {
        this.atmContainer = document.getElementById('atmContainer');
        this.atm;
    }

    addAtm() {
        this.atm = document.createElement('div');
        this.atm.className = 'atm free-atm';
        this.atm.innerText = '0';

        // const closeButton = document.createElement('div');
        // closeButton.id = 'closeButton-' + i;
        // closeButton.className = 'atm-close-button';
        // closeButton.innerHTML = '&#10006;';
        // this.atmContainer.appendChild(closeButton);

        this.atmContainer.appendChild(this.atm);
    }

    deleteAtm() {
        this.atm.remove();
    }

    addHumanToAtm(countPeople) {
        
        this.atm.innerText = countPeople;
        this.atm.className = 'atm free-atm';
    }

    setAtmClassBusy() { 
        this.atm.className = 'atm busy-atm';
    }

}

module.exports = AtmUi;
