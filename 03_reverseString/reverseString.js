const reverseString = function(str) {
    let word = [];
    let arr = str.split("");
    for(let i = arr.length-1; i >= 0; i --) {
        word.push(arr[i]);
    };
    return word.join("");
};


module.exports = reverseString;
