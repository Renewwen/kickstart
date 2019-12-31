import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
    // we are in the browser and metaMask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    // We are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/fe4e26486dd34200b6aa70a78e8f4313'
    );
    web3 = new Web3(provider); // what is provider?
}

export default web3;
