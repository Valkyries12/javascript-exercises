const caesar = function(word, num) {
    let arrayWord = word.split("");
    let arrayCaesar = [];
    let caesarWord;
    let ascii;

    for(let i = 0; i < arrayWord.length; i++) {
        ascii = arrayWord[i].charCodeAt();
        if(arrayWord[i].match(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g)) {
            arrayCaesar.push(arrayWord[i]);
        }else {
            arrayCaesar.push(String.fromCharCode(ascii + num));
        }
        
    }
    return arrayCaesar.join("")
};


caesar('Hello, World!', 5)
module.exports = caesar;
