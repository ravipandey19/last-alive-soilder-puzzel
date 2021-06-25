var n = 16;

function soilder(){
    if((n & (n - 1)) == 0){
        return 1;
    } else {
        return (n - Math.pow(2, parseInt(Math.log(n) / Math.log(2), 10))) * 2 + 1;
    }
}

soilder();
