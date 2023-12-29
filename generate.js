const ethers = require('ethers');

const wallet = ethers.Wallet.fromPhrase(
  ethers.Mnemonic.entropyToPhrase(ethers.randomBytes(32))
)

console.log('Address:         ', wallet.address)
console.log('Mnemonic phrase: ', wallet.mnemonic.phrase)
console.log('Private key:     ', wallet.privateKey)