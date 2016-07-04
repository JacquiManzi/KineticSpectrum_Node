
const _ = require('lodash');
const os = require('os');
const net = require('net');
const PDSca = require('./PDSca');
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

function Network() {

	this.localPort;
	this.localIPAddress;
	this.networkCardList = [];
	this._bindedNetworkCard;
	this.connected = false;
	this.pdss = [
	 new PDSca(this, "169.254.49.153", 6038)
	];
}
        
/*           
 * Retrieve a list of all the Network Interfaces on your system
 */

Network.prototype.retrieveNetworkCards = function retrieveNetworkCards() {
	return os.networkInterfaces();
};

Network.prototype.setInterface = function setInterface(networkInterface) {

	if (this.networkCardList.length === 0) {
		this.networkCardList = this.retrieveNetworkCards();
	}
    //todo: verify that IPV4 interface on network card list is used
	this.networkCard = this.networkCardList[networkInterface][1];
	this.initializeLocalIP();
	this.initializeLocalPort();
};

Network.prototype.sendUpdate = function sendUpdate(endPoint, colorData) {
        
    //console.log(colorData.bytes.toDebug())
    colorData.bytes.reset()
 	server.send(colorData.bytes.toBuffer(), 6038, endPoint, () => {
    			console.log('sent message');
    	});
         
}


/*
 * Retrieve your local IP Address for your default network interface
 */
Network.prototype.initializeLocalIP = function initializeLocalIP() {
 
	this.localIPAddress = this.networkCard.address;

	/*_.each(this._bindedNetworkCard.getIPProperties().unicastAddresses, (unicastAddress) => {
	
		if (unicastAddress.address.addressFamily === addressFamily.InterNetwork) {

			this.localIPAddress = unicastAddress.address;
			return unicastAddress.address
		}

	throw new Error("Specified network card has no IPv4 IP Address...");		

	});*/
};

/*
 * Initialize your the local port to communicate over
 */
Network.prototype.initializeLocalPort = function initializeLocalPort() {

	var server = net.createServer((socket) => {
  		socket.end('goodbye\n');
	}).on('error', (err) => {
  	// handle errors here
  	throw err;
	});

    return this.localPort;
};

module.exports = Network;
