require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture street dash museum coconut hockey clock metal ghost'; 
let testAccounts = [
"0xdd3a14f006ad05e2435a1b99ba40cf2817c13abf1f1b198a29bfa7ea30442144",
"0x31e435c658653b67652fa3c6ccc8f9d4def23f6e0a5c5d03d9d8254b8594c9a4",
"0xfa64d747cfaf552b19b047d9a966e926516ed8ac1cb19fc263d51a1367727ced",
"0xbe9cbbea053ab787e4defbf0546a9f24a934b2a3e818cc9371821affc24b8a41",
"0x3ef1a4e26ac0643a6830c78e0ba1952b998dfdbc7261068d286574a3f363629b",
"0xd150a68ea54f52fa72669913bcf07e47f3f3855717251e82899c844f04d12626",
"0x25485b736f21337604a38d5e6a39b4ad307343dec724becf8c3843ff39304fea",
"0x327cf4e218bd98f84dd811869aec09b3fedc6a7a629126ca432d417f94d4160e",
"0xa9c40562798a7ed9fccbfe977992b72d14b5a7f67d9f003cc2016ca9158cb800",
"0x6345ae2781303dff838518e836f6a062c528ddb107a1fd14573cb155ff5c342e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

