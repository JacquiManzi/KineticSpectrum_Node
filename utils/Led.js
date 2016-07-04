
const Pattern = require('./Pattern');
const ByteBuffer = require('bytebuffer');

function Led(bytes, initialLength, position) {

    this.byteArr = bytes;
    this.initialLength = initialLength;
    this.position = position;
    this.color = Pattern.black();
    this.brightness = .25;

};

Led.prototype.setColor = function setColor(value) {

    if (this.initialLength + this.position * 3 > this.byteArr.length) {
        throw new Error();
    }
    this.byteArr.writeByte(this.adjustBrightness(value.r), this.initialLength + this.position * 3);
    this.byteArr.writeByte(this.adjustBrightness(value.g), this.initialLength + this.position * 3 + 1);
    this.byteArr.writeByte(this.adjustBrightness(value.b), this.initialLength + this.position * 3 + 2);
}

Led.prototype.getColor = function getColor() {

    if (this.initialLength + this.position * 3 >= this.byteArr.length) {
        throw new Error();
    }

    return {
        r: this.reverseBrightness(this.byteArr[this.initialLength + this.position * 3]),
        g: this.reverseBrightness(this.byteArr[this.initialLength + this.position * 3 + 1]),
        b: this.reverseBrightness(this.byteArr[this.initialLength + this.position * 3 + 2])
    }
}

Led.prototype.reverseBrightness = function reverseBrightness(byteValue) {

    if (this.brightness == 0) {
        return 0;
    }
    
    const newValue = (byteValue / this.brightness);
    return Math.Max(0, Math.Min(newValue, 255));
}

Led.prototype.adjustBrightness = function adjustBrightness(byteValue) {

    newValue = Math.floor(byteValue * this.brightness);
    return Math.max(0, Math.min(newValue, 255));
}

module.exports = Led;