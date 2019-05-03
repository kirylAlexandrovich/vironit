const Emitter = require('./eventEmitter');
// const index = require('./index');

class AtmUi extends Emitter {
    constructor() {
        super();
        this.atmsContainer = document.getElementById('atmContainer');
    }

    addAtm() {
        this.atmCont = document.createElement('div');
        this.atmCont.className = 'atm-cont';

        this.atm = document.createElement('div');
        this.atm.className = 'atm free-atm';
        this.atm.innerText = '0';

        const closeButton = document.createElement('div');
        closeButton.className = 'atm-close-button';
        closeButton.title = 'Close ATM';
        closeButton.innerHTML = '&#10006;';

        this.atmCont.appendChild(closeButton);
        this.atmCont.appendChild(this.atm);

        this.atmsContainer.appendChild(this.atmCont);
    }

    deleteAtm() {
        this.atmCont.remove();
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
