var arr = [19, 7, 0, 3, 18, 15, 12, 1, 8,11, 10, 9, 5, 13, 16, 2, 14, 17, 4];
arr = arr.sort();
var out = [];

for (var i = 0; i < arr.length; i++) {
    if(arr.indexOf(i) !== -1){
        out.push(i)
    } else {
        out.push(-1)
    }
}

console.log(out)
