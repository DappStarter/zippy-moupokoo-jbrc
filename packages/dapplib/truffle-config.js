require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture strategy response still assume hidden kiwi slot giant'; 
let testAccounts = [
"0xb00a0bc04cb266a3f8149ac5f2c6702f5ac0a4e9da8770f7eef206ef0b408176",
"0xa4469534f2f541142786533d14bba3088ca40bf267f46a2abc29fefa98cd9877",
"0xc11a0eb6b60deee7ca2e63388080cd2276a9fad979f5794d302fdbd176f6746e",
"0x1e83ed5c19134057d9b13946390456ab6d24fd11e0c44436d805c57bbfc0d23d",
"0xabd6cdb10b0d9f486272da20820a87991b7baeac19b42c53b9752c430e5deed9",
"0xa361d03489d58558cb7cb1a61dbc782ab1199a124fe89a60a7df14f81afa4100",
"0xd1307579c3f5f2a38d3d2a84fd7320ed8502b49c468cb052b10d6be7fa3c33dd",
"0xde1e83fa4478afafad8b97a284f8a51c9e100b266c01d02a2de361528b8f4207",
"0x29eed23947739eff263c6409f35d177f2eed85d5eb27ce566ac0c82604b2d9bc",
"0xfff5f656da318dc1e6660aadc51ef7b35547194d15aae48eac23312a76ef2866"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

