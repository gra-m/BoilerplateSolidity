const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
// js ABI and contract bytecode: Whereas an API defines a source interface, an ABI defines the low-level binary interface.
const {interface:aBI, bytecode} = require('../compile');

let accounts;
let inbox;
beforeEach(async () => {
   accounts = await web3.eth.getAccounts()

    // use an account to deploy the contract:
    inbox = await new  web3.eth.Contract(JSON.parse(aBI))
        .deploy({data: bytecode, arguments: ['Well hello there..!']})
        .send({from: accounts[0], gas: 1_000_000});
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
    })
});
