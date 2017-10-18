var isNotOverlapArray = function(array) {
    var arr = array.sort(function (a, b) {
        return a - b;
    });

    for (var i = 1; i < arr[arr.length - 1]; i++) {
        if (arr.indexOf(i) === -1) return false;
    }

    return true;
};

console.log(isNotOverlapArray([4, 1, 3, 2])); // true
console.log(isNotOverlapArray([4, 1, 3]));    // false