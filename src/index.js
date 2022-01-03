module.exports = function toReadable (number) {
    const converter = require('number-to-words');
    const converted = converter.toWords(number);
    const convertedWithoutdash = converted.replace('-', ' ');
    return convertedWithoutdash; 
    
}
