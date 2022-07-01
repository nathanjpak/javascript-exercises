const palindromes = function (string) {
    const punctuation = [".", ",", "!", "?", " "];
    string = string.replace(/[^a-zA-Z]/g, "");
    string = string.toLowerCase();
    let midpoint = Math.floor(string.length / 2);
    const firstHalf = string.slice(0, midpoint);
    let secondHalf = "";
    if ((string.length % 2) === 0) {
        secondHalf = string.slice(midpoint);
    } else {
        secondHalf = string.slice(midpoint + 1);
    }
    for (i=0; i < firstHalf.length; i++) {
        if (firstHalf[i] !== secondHalf[firstHalf.length - i -1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
