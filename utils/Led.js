
Colors = require('/.Pattern')

function Led(bytes, initialLength, position) {

    this.byteArr = bytes;
    this.initialLength = initialLength;
    this.position = position;
    this.color = Colors.black;
    this.brightness = 1;

};

Led.prototype.setColor = () => {

    if (this.initialLength + this.position * 3 > this.byteArr.length) {
        throw new Error();
    }
    this.byteArr[this.initialLength + this.postion * 3] = (this.adjustBrightness(value.R));
    this.byteArr[this.initialLength + this.position * 3 + 1] = (this.adjustBrightness(value.G));
    this.byteArr[this.initialLength + this.position * 3 + 2] = (this.adjustBrightness(value.B));
}

Led.prototype.getColor = () => {

    if (this.initialLength + this.position * 3 >= this.byteArr.length) {
        throw new Error();
    }

    return {
        R: this.reverseBrightness(this.byteArr[this.initialLength + this.position * 3]),
        G: this.reverseBrightness(this.byteArr[this.initialLength + this.position * 3 + 1]),
        B: this.reverseBrightness(this.byteArr[this.initialLength + this.position * 3 + 2])
    }
}

Led.prototype.reverseBrightness = (byteValue) => {

    if (this.brightness == 0) {
        return 0;
    }
    
    const newValue = (byteValue / this.brightness);
    return Math.Max(0, Math.Min(newValue, 255));
}

Led.prototype.adjustBrightness = (byteValue) => {

    newValue = (byteValue * this.brightness);
    return Math.Max(0, Math.Min(newValue, 255));
}