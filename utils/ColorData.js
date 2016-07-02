
const _ = require('lodash');

function ColorData(pds, initialData, lightType, initial) {

    this.deviceAddress = pds.endPoint.address;
    this.lightType = lightType;
    this.initialLength = initialData.length;
    this.byteArr = [];
    this.initial = initial;
    this.leds = [];

    for(let i= 0; i < this.lightType.length; i++) {

         //Led led = new Led(_byteArray, _initialLength, i);
         //_leds.Add(led);
        //led.Color = Colors.Black;
    }
};

module.exports = ColorData;