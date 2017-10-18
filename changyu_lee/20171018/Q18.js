var adjacentElementsProduct = function(arr) {
    var result = [];
    for (var i = 0; i<arr.length-1; i++){
        result.push(arr[i] * arr[i+1]);
    }
    result.sort(function (a, b) {return a - b;});
    return result.pop();
};

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));