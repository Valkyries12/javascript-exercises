const fibonacci = function(num) {
    let fib = 1;
    for(let i = 1; i <= num; i++) {
        fib += i;
    }
    return fib
};

fibonacci(4);

module.exports = fibonacci;
