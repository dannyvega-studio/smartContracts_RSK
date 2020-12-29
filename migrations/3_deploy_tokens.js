const EIP20 = artifacts.require('./EIP20.sol');

module.exports = (deployer) => {
    deployer.deploy(EIP20, 10000, 'Flower Token', 1, 'FLT');
};