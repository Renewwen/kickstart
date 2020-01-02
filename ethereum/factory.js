import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xb461c4334c85202e3C6F1Dc9E462d6fEd643dfE9'
);

export default instance;