
const _ = require('lodash');
const Led = require('./Led');
const black = require('./Pattern');
const HexString = require('./HexString');
const ByteBuffer = require('bytebuffer');

const LIGHT_NO = 50;


function ColorData(pds, initialData, initial) {

    this.deviceAddress = pds.endPoint.address; 
    this.initialLength = initialData.capacity();
    this.bytes = new ByteBuffer(536);
    this.bytes.fill(0)
    initialData.copyTo(this.bytes,0,0)
    this.bytes.reset()

    this.initial = initial;
    this.leds = [];

    for(let i = 0; i < LIGHT_NO; i++) {

        let led = new Led(this.bytes, this.initialLength, i);
        this.leds.push(led);
        led.Color = black; 
    }
};

ColorData.prototype.updateColor = function updateColor(hexColor) {

    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
    _.each(this.leds, (led) => {
        if (result == null) {
            throw new Error('invalid color: ' + hexColor)
        }

        led.setColor({
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            });
    });
}

module.exports = ColorData;