const sumAll = function(num1, num2) {
    if (typeof(num1) === "number" && typeof(num2) === "number") {
        let start = num1;
        let end = num2;
        if (num2 < num1) {
            start = num2;
            end = num1;
        }
        if (start >= 0 && end >= 0) {
            let num = 0;
            for (i=start; i<=end; i++) {
                num = num+i;
            }
            return num;
        } else {
            let message = "ERROR";
            return message; 
        }
    } else {
        let message = "ERROR";
        return message;
    }
};

// Do not edit below this line
module.exports = sumAll;
