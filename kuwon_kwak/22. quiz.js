// #22. 특별한 정렬
// n개의 정수를 가진 배열이 있다. 이 배열은 양의 정수와 음의 정수를 모두 가지고 있다.
// 이 배열을 좀 특별한 방법으로 정렬해야 한다. 음의 정수는 앞쪽에 내림차순으로, 양의 정수는 뒷쪽에 있어야 한다.
// 단, 인수로 주어진 원본 배열은 변경되지 않아야 한다.
// 예를 들어, [-1, 1, 3, -2, 2, 0] 이 주어졌을 때, [-1, -2, 0, 1, 2, 3] 를 반환한다.


function specialSort(array) {
    var result_arr = [];
    var negative_arr = [];
    var positive_arr = [];
    for (i = 0; i < array.length; i++) {
        array[i] < 0 ? negative_arr.push(array[i]) : positive_arr.push(array[i])
    }
    negative_arr = negative_arr.sort(function(a, b) {
        return b - a;
    })
    positive_arr = positive_arr.sort(function(a, b) {
        return a - b;
    })
    return result_arr = negative_arr.concat(positive_arr)
}
var testArray = [-1, 1, 3, -2, 2, 0, -22, -14, 13, 35];
console.log(testArray); // [ -1, 1, 3, -2, 2, 0 ]
console.log(specialSort(testArray)); // [ -1, -2, 0, 1, 2, 3 ]