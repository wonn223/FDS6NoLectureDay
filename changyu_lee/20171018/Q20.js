var average = function(array) {
    var sum = 0;
    var result = 0;
    for (var i = 0; i<array.length; i++) {
        sum += array[i];
    }
    result = sum / array.length;
    return result;
};

var testArray = [5, 3, 4];
console.log(average(testArray));