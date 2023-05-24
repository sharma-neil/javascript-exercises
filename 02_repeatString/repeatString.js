const repeatString = function(str_val,rep_val) {
    if (rep_val < 0) return 'ERROR';
    let word = ''
    for (let i = 0; i < rep_val; i++) {
        word += str_val;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
