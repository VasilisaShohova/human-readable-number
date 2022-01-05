const num = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
const tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
module.exports = function toReadable (number) {


    if (number < 20) {
        return num[number];
    };
    const digit = number%10;
    if (number < 100) {
        const withTens = tens[~~(number/10)-2] + (digit? "-" + num[digit]: "")
        const tensWithoutDash = withTens.replace("-", ' ');
        return tensWithoutDash;
    }
    if (number < 1000) {
        const withHundreds = num[~~(number/100)] +" hundred" + (number%100 == 0? "": " " + toReadable(number%100));
        const hundredsWithoutDash = withHundreds.replace("-", " ");
        return hundredsWithoutDash;
    }
    if (number > 1000) {

        const withThousands = toReadable(~~(number/1000)) + " thousand" + (number%1000 != 0? " " + toReadable(number%1000): "");
        const thousandsWithoutDash = withThousands.replace("-", " ");
        return thousandsWithoutDash;
    }

    
}
