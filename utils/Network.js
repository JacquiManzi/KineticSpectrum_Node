
/*
1. create a new network
2. call RetrieveNetworkCards
3. call SetInterface("Ethernet")
4. call network.BroadCast();
*/

const _ = require('lodash');

function Network() {

	const BUFFER_SIZE = 1024;
	//public readonly Socket Socket;
	//public byte[] Buffer = new byte[BUFFER_SIZE];

	this.localPort;
	this.localIPAddress;
	this.networkCardList = [];
	this._bindedNetworkCard;
	this.connected = false;
	this._pdss = [];

	//readonly IPEndPoint _ipEndPoint = new IPEndPoint(IPAddress.Any, 55350);
	//private readonly Socket _socket = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.Udp);

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

Network.prototype.retrieveNetworkCards = () => {

	//let adapters = NetworkInterface.GetAllNetworkInterfaces();
	return adapters
};

Network.prototype.setInterface = (networkInterface) => {

	if (_networkCardList.length === 0) {
		this.retrieveNetworkCards();
	}

	this.connected = false;

	_.each(this.networkCardList, (networkCard) => {

		if (networkCard.name === this.networkInterface) {
			this.networkCard = networkCard;
			this.initializeLocalIP();
			this.InitializeLocalPort();
			this.connected = true;
		}
	});

	throw new Error("Specified network interface '" + this.networkInterface + "' doesn't exist.");
};

/*
 * Retrieve your local IP Address for your default network interface
 */
Network.prototype.initializeLocalIP = () => {

	_.each(this._bindedNetworkCard.getIPProperties().unicastAddresses, (unicastAddress) => {
	
		if (unicastAddress.address.addressFamily === addressFamily.InterNetwork) {

			this.localIPAddress = unicastAddress.address;
			return unicastAddress.address
		}

	throw new Error("Specified network card has no IPv4 IP Address...");		

	});
};

/*
 * Initialize your the local port to communicate over
 */
Network.prototype.InitializeLocalPort = () => {

 	//TcpListener listener = new TcpListener(IPAddress.Parse("127.0.0.1"), 0);
    //listener.Start();
    //this.localPort = ((IPEndPoint)listener.LocalEndpoint).Port;
    //listener.stop();

    return this.localPort;
};
