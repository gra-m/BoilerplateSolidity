const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

/* Mocha: it -> run a test and make an assertion
 describe -> groups together it funcs
 beforeEach -> Execute general setUp code
*/

beforeEach(() => {
    // get list of all accounts
    web3.eth.getAccounts()
        .then(fetchedAccounts => {
            console.log(fetchedAccounts)
        })
    // use an account to deploy a contract.
})

// Added only to run beforeEach
describe('Inbox', () => {
    it('deploys a contract', () => {

    })
})
