function findLongestWordLength(str) {
    var words = [];
    words = str.split(' ');
    var maxlength = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxlength) {
            maxlength = words[i].length;
        }
    }
    return console.log(maxlength);
}

findLongestWordLength("The quick brown fox over the lazy dog");