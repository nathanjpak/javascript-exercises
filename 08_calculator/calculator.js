const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
    let init = 0;
    return array.reduce((previousValue, currentValue) => previousValue + currentValue, init);
};

const multiply = function(array) {
    let init = 1;
    return array.reduce((previous, current) => previous * current, init);
};

const power = function(a, b) {
    let value = 1;
    for (i = 1; i <= b; i++) {
        value = value * a;
    }
    return value;
};

const factorial = function(num) {
	if (num === 0) {
        return 1;
    }
    let fact = 1;
    for (i = num; i > 1; i--) {
        fact = fact * i;
    }
    return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};