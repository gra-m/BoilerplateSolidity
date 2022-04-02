const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

/* Mocha: it -> run a test and make an assertion
 describe -> groups together it funcs
 beforeEach -> Execute general setUp code
*/

let car;
beforeEach(() => {
    car = new Car();
});

class Car {
    park() {
        return 'stopped';
    }

    drive() {
        return 'going';
    }
}

describe('CarTest', () => {
    it("parkFunc", () => {
        assert.strictEqual(car.park(), 'stopped', 'Error, park return not stopped');
    });
    it("driveFunc", () => {
        assert.strictEqual(car.drive(), 'going', 'Error, park return not going');
    });

});