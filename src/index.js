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

       
    }
    return result.replace(/\s$/,'') ;
}
