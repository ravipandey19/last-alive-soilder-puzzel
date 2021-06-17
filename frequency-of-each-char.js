function getFrequency() {
    var string = 'aaaabbsbbbbbbssssbc'
    var freq = {};
    var cha  = ''
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
console.log(cha)
    return freq;
};

getFrequency();
