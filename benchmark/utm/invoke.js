'use strict';

let txIndex = 0;
let bc, contx;
const testData = require('./data/users10000.json');

module.exports.init = function(blockchain, context, args) {
    bc = blockchain;
    contx = context;
    return Promise.resolve();
};

module.exports.run = function() {
    // TODO: until Fabric query is implemented, use invoke
    const flightData = testData[txIndex];
    txIndex++;
    return bc.invokeSmartContract(
        contx,
        'utm',
        'v1',
        [flightData.name, JSON.stringify(flightData.flightPlan)],
        120
    );
};

module.exports.end = function() {
    return Promise.resolve();
};
