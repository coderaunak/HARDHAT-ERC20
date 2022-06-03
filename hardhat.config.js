require("@nomiclabs/hardhat-waffle");
const ALCHEMY_API_JEY ="Jpbm5awonirpvWfIhDo_0uWoMVNJocsG";
const RINKEBY_API_JEY ="0x4b2aac51d70bfbb4e0c0acf3ac174bbbe685182ffb3229973cf0a521fab6fd05";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
   networks: {
     rinkeby: {
       url: 'https://eth-rinkeby.alchemyapi.io/v2/Jpbm5awonirpvWfIhDo_0uWoMVNJocsG',
       accounts: [RINKEBY_API_JEY]
     },
   },
};
