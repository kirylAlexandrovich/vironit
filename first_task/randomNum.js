'use strict'

function rundomNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports = rundomNum;