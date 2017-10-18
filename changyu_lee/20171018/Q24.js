var digitSum = function(n) {
    if (n <= 100000000) {
        n = n;
    } else {
        return false;
    }
    var str = n + '';
    var arr = str.split('');
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    return sum;
};

console.log(digitSum(123));  // 6
console.log(digitSum(987));  // 24
console.log(digitSum(100000001));  // false