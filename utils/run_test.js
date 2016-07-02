

const Network = require('./Network');
const TEST_COUNT = 50;
const network = new Network();

network.retrieveNetworkCards();
network.setInterface("Ethernet");

/*for (let i = 0; i < TEST_COUNT; i++) {

	let pds = Network.pdss[0];

	_.each(pds.colorData, (colorData) => {
		colorData[j] = color;
	});
	pds.UpdateSystem();
	//Thread.Sleep(100);
}*/