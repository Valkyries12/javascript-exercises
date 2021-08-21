const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1 , num2) {
	return num1 - num2
};

const sum = function(nums) {
	return nums.reduce((acum, num) => acum + num, 0)
};

const multiply = function(nums) {
  return nums.reduce((acum, num) => acum * num , 1)
};


const power = function(num, pow) {
	return Math.pow(num, pow)
};

const factorial = function(num) {
  let acum = 1;
  for(let i = 1; i <= num; i++) {
    acum *= i;
  }
  return acum
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
