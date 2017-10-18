var getArray = function(arr) {
    var result = [];
    for (var i = 0; i<arr.length; i++) {
        if(arr[i] % 2 === 0 && arr[i] > 3) {
            result.push(arr[i]);
        }
    }
    return result;
};

var arr = [1, 2, 3, 4, 5, 6];
console.log(getArray(arr));