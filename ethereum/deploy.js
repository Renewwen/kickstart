const HDWalletProvider = require('truffle-hdwallet-provider'); // what is truffle-hadwallet-provider??? Research it!!
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'select outer upgrade loop inherit doll embark kiwi blouse grace original outdoor',
    'https://rinkeby.infura.io/v3/fe4e26486dd34200b6aa70a78e8f4313'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: '0x' + compiledFactory.bytecode })
        .send({ from: accounts[0] });
    
    console.log('Contract deployed to', result.options.address);
};
deploy();