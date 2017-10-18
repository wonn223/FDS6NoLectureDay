var multiSum = function (from, to) {
    var arr;
    var result = 1;
    var sum = 0;

    for (var i = from; i <= to; i++) {
        arr = i.toString().split('');
        for (var j = 0; j < arr.length; j++) {
            result *= arr[j];
        }
        sum += result;
        result = 1;
    }
    return sum;
};

console.log(multiSum(10, 13));   // 6 
console.log(multiSum(10, 1000)); // 93150