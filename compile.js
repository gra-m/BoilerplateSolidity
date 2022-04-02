const path = require('path');
const fs = require('fs');

// here __dirname resolves to BoilerplateSolidity
const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

//module.exports = compile(source, 1).contracts[':Inbox'];




