function voidReturn(arg1, arg2) {
    console.log(arg1 + arg2);
}
function singleArg(arg1) {
    console.log(arg1);
}
function funcWithCallBack(arg1, arg2, cb) {
    var result = arg1 + arg2;
    console.log('with func dosent return anyting');
    cb(result); //call back
}
voidReturn(99, 99);
var funcValue; //create variable type of Function6 like - let funcValue: Function
funcValue = voidReturn; //asingn function to function value
funcValue(1, 18);
funcWithCallBack(15, 15, function (result) {
    console.log(result);
});
function manyArgs() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (total, n) { return total + n; }, 0);
}
manyArgs(3, 5, 6, 7, 8, 9);
