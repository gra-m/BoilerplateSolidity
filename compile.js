const solc = require('solc')
const path = require('path');
const fs = require('fs');
// node compile.js


// here __dirname resolves to BoilerplateSolidity
const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');


//console.log(solc.compile(source, 1).contracts[':inbox']);
module.exports  = solc.compile(source, 1).contracts[':inbox'];



