const fibonacci = function(position) {
    if (position <= 0) {
        return "OOPS";
    } else if (position <= 2) {
        return 1;
    } else {
        const fibs = [1, 1];
        for (i=2; i < position; i++) {
            fibs.push(fibs[i-1]+fibs[i-2]);
        }
        return fibs[position-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
