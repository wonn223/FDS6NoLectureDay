var findMinDistance = function(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if(array[i+1] - array[i] === 1) {
            result.push([array[i], array[i+1]]);
        }
    }
    return result;
};

var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]