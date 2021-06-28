var abc = function(a, b, c) {
  return [a, b, c];
}; 

var curry = function (fn) {

    return function f1(...args){
        if(args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function (...args2){
                return f1.apply(this, args.concat(args2))
            }
        }
    }
}



var curried = curry(abc);

curried(1)(2)(3);
// // => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3] 
