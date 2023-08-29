const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********' : ' ',
};

function decode(expr) {
    const morzeSymbolLength = 2;
    const morzeLetterLength = 10 / morzeSymbolLength;
    const decodedArr = [];
    let containerArr = [];
    let decodedStr = '';

    const replaceSymbols = (str) => {
        switch (str) {
            case '00': return '';
            case '10': return '.';
            case '11': return '-';
            default: return str;
        };
    };

    for (let i = 0; i < expr.length; i+=morzeSymbolLength) {
        const morzeSymbol = expr.slice(i, i+morzeSymbolLength);
        containerArr.push(replaceSymbols(morzeSymbol));

        if (containerArr.length === morzeLetterLength) {
            decodedArr.push(containerArr.join(''));
            containerArr = [];
        };
    };

    decodedArr.forEach((letter) => {
        decodedStr += MORSE_TABLE[letter]
    });

    return decodedStr;
}

module.exports = {
    decode
}
