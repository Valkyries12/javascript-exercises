const palindromes = function (word) {
    let auxWord = [];
    let trimWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/ /g,"").toLowerCase();
    let auxArr = trimWord.split("");
    for(let i = auxArr.length -1; i >= 0; i--) {
        auxWord.push(auxArr[i]);
    }
    
    return auxWord.join("") === trimWord

};

palindromes("racecar!");

module.exports = palindromes;
