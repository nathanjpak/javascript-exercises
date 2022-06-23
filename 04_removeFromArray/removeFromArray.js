const removeFromArray = function(array, ...unwanteds) {
    const newArray = [];
    for (element of array) {
        let matches = 0;
        for (unwanted of unwanteds) {
            if (element === unwanted) {
                matches++;
            }
        }
        if (matches === 0) {
            newArray.push(element);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
