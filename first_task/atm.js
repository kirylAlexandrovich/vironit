'use strict'

const Atm = function () {
    this.countPeople = 0;
    this.atmStatus = 'free';
    this.atms = [];
}

module.exports = new Atm;
