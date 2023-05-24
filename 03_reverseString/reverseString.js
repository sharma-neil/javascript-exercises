const reverseString = function(word) {

    rev_word = '';

    for (let i = word.length - 1; i >= 0; i--){
        rev_word += word[i];
    }

    return rev_word;
};

// Do not edit below this line
module.exports = reverseString;
