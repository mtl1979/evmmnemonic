const ethers = require("ethers");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter mnemonic phrase? ", function(mnemonic) {
  const wallet = ethers.Wallet.fromPhrase(mnemonic);
  console.log('Private key:', wallet.privateKey);
  process.exit(0);
});