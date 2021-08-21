const repeatString = function(word, num) {
    if(num < 0) {
        return "ERROR";
    };
    let str = "";
    for(let i = 0; i < num; i++){
        str += word;
    }
    return str;
};

module.exports = repeatString;
