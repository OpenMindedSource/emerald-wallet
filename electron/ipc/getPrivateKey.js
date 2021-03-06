const ipcMain = require('electron').ipcMain; // eslint-disable-line import/no-extraneous-dependencies
const Wallet = require('emerald-js').Wallet;

module.exports = () => {
  ipcMain.on('get-private-key', (event, {keyfile, passphrase}) => {
    const wallet = Wallet.fromV3(keyfile, passphrase);
    const privateKey = wallet.getPrivateKeyString();
    event.sender.send('recieve-private-key', privateKey);
  });
};
