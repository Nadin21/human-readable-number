module.exports = function toReadable(number) {
    let arrayReversNum = String(number).split('').reverse();
    let result = '';

    for (let i = 0; i < arrayReversNum.length; i++) {
        if (arrayReversNum.length > 1 && arrayReversNum[1] == 1 && i <= 1) {
            if (i == 0) continue;
            switch (arrayReversNum[1] + arrayReversNum[0]) {
                case '10':
                    result += "ten";

                    break;
                case '11':
                    result += "eleven";

                    break;
                case '12':
                    result += "twelve";

                    break;
                case '13':
                    result += "thirteen";

                    break;
                case '14':
                    result += "fourteen";

                    break;
                case '15':
                    result += "fifteen";

                    break;
                case '16':
                    result += "sixteen";

                    break;
                case '17':
                    result += "seventeen";

                    break;
                case '18':
                    result += "eighteen";

                    break;
                case '19':
                    result += "nineteen";

                    break;
            }

        }
        else if (arrayReversNum.length == 1 && arrayReversNum[0] == 0) {
            result = "zero";
        }
        else if (i == 0 || i == 2) {
            if (i == 2) result = ' hundred ' + result;
            switch (arrayReversNum[i]) {
                case '1':
                    result = "one" + result;
                    break;
                case '2':
                    result = "two" + result;
                    break;
                case '3':
                    result = "three" + result;
                    break;
                case '4':
                    result = "four" + result;
                    break;
                case '5':
                    result = "five" + result;
                    break;
                case '6':
                    result = "six" + result;
                    break;
                case '7':
                    result = "seven" + result;
                    break;
                case '8':
                    result = "eight" + result;
                    break;
                case '9':
                    result = "nine" + result;
                    break;
            }
            continue;
        }
       
    }
    return result.replace(/\s$/,'') ;
}
