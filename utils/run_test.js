

const Network = require('./Network');
const TEST_COUNT = 2;
const network = new Network();
const _ = require('lodash');
const Pattern = require('./Pattern');
const ColorData = require('./ColorData');


network.retrieveNetworkCards();
network.setInterface("en0");


colors = Pattern.allColors
let cIndex =0;
let pds = network.pdss[0];
setInterval(function() {
  
  for (let i = 0; i < pds.ports.length; i++) {
	pds.ports[i].updateColor(colors[cIndex]);									
  }
  cIndex = (cIndex+1)%colors.length
  pds.updateSystem()
}, 1000)