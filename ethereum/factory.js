import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xefBBaF3c2f8CdB0bD3c4fDb31acb447346E0f538'
);

export default instance;