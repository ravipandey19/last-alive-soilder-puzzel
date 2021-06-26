var arr = ['9:00', '9:40', '9:50', '11:00', '15:00', '18:00'];
var dep = ['9:10', '12:00', '11:20', '11:30', '19:00', '20:00'];

var platform = 1;

for(var i = 0; i < dep.length; i++){
    if(dep[i] > arr[i+1]){
        platform++
    }
}

console.log(platform)
