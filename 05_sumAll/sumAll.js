const sumAll = function(num1, num2) {
    //creaar variable acumuladora
    if(isNegative(num1, num2) || isNotNumber(num1, num2)) {
        return "ERROR";
    };
    let acum = 0;
    let desde = num1;
    let hasta = num2;
    if(num1 > num2) {
        desde = num2;
        hasta = num1;
    }
    
    //loopear desde num1 hasta num2
    for(let i = desde; i <= hasta; i++) {
           //acumular cadaa iteracion en la variaable acumuladora
        acum += i;
    }
 
    //retornar la var acumuladora
    return acum;
};

function isNegative(num1, num2) {
    return num1 < 0 || num2 < 0
};

function isNotNumber(num1, num2) {
    return typeof(num1) !== "number" || typeof(num2) !== "number"
};


module.exports = sumAll;
