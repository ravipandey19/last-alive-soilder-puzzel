let n1 = 1;
let arr = [0]

for(let i = 0; i < 10; i++) {
    arr.push(arr[i] + n1)
    n1 = arr[i];
}


console.log(arr)
