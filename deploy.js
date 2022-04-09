"use strict";
// require node dotenv as soon as possible:
require('dotenv').config();
//need truffle installed in contracts folder: npm install @truffle/hdwallet-provider
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface: aBI, bytecode} = require('./compile');

// truffle is specify account and live node to be used(accessed via Infura):
const provider = new HDWalletProvider(
    process.env.WALLET_PHRASE,
    process.env.INFURA_ACCESS_ADDRESS,
)

const web3 = new Web3(provider);




