
const _ = require('lodash');
const os = require('os');
const net = require('net');
const PDSca = require('./PDSca');

function Network() {

	this.localPort;
	this.localIPAddress;
	this.networkCardList = [];
	this._bindedNetworkCard;
	this.connected = false;
	this._pdss = [
	{ip: "169.254.49.153", port: 6038}
	];

	//readonly IPEndPoint _ipEndPoint = new IPEndPoint(IPAddress.Any, 55350);

	/*_pdss.Add(new PDS480Ca(this, new IPEndPoint(IPAddress.Parse("169.254.49.150"), 6038)));
    _pdss.Add(new PDS480Ca(this, new IPEndPoint(IPAddress.Parse("169.254.49.151"), 6038)));
    _pdss.Add(new PDS480Ca(this, new IPEndPoint(IPAddress.Parse("169.254.49.152"), 6038)));
    _pdss.Add(new PDS480Ca(this, new IPEndPoint(IPAddress.Parse("169.254.49.153"), 6038)));
    _pdss.Add(new PDS60Ca(this, new IPEndPoint(IPAddress.Parse("169.254.49.154"), 6038)));
    _pdss.Add(new PDS480Ca75V(this, new IPEndPoint(IPAddress.Parse("169.254.49.160"), 6038)));
    _pdss.Add(new PDS480Ca75V(this, new IPEndPoint(IPAddress.Parse("169.254.49.161"), 6038)));
    _pdss.Add(new PDS480Ca75V(this, new IPEndPoint(IPAddress.Parse("169.254.49.162"), 6038)));
    _pdss.Add(new PDS480Ca75V(this, new IPEndPoint(IPAddress.Parse("169.254.49.163"), 6038)));
    _pdss.Add(new PDS480Ca75V(this, new IPEndPoint(IPAddress.Parse("169.254.49.164"), 6038)));
    _pdss.Add(new PDS480Ca75V(this, new IPEndPoint(IPAddress.Parse("169.254.49.165"), 6038)));
	*/

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

	//this.connected = false;
	this.networkCard = this.networkCardList.en0[1];
	this.initializeLocalIP();
	this.initializeLocalPort();
	this.connected = true;
	/*_.each(this.networkCardList, (networkCard) => {
		
		if (Object.keys(networkCard)[0] === networkInterface) {
			this.networkCard = networkCard;
			this.initializeLocalIP();
			this.InitializeLocalPort();
			this.connected = true;
		}
	});*/

	//throw new Error("Specified network interface '" + this.networkInterface + "' doesn't exist.");
};

/*
 * Retrieve your local IP Address for your default network interface
 */
Network.prototype.initializeLocalIP = function initializeLocalIP() {

	console.log(this.networkCard)
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


 	server.listen({
 		port: 0,
 		host: "127.0.0.0.1"
 	}, () => {
 		let address = server.address();
 		console.log('opened server on %j', address);

 		this.localPort = server.port(); // not sure if this is valid
 		server.close();
 	})

    return this.localPort;
};

module.exports = Network;
