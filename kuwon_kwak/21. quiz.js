// #21. 최단 거리 1 차원 점의 쌍 구하기(DAUM)
// 1 차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들) 의 쌍을 배열로 반환하는 함수를 작성하라.
// (단 점들의 배열은 모두 정렬되어있다고 가정한다.) 
// 예를 들어[1, 3, 4, 8, 13, 17, 20, 23, 24] 이 주어졌다면, 결과값은[[3, 4], [23, 24]] 가 될 것이다.


function findMinDistance(array) {
    var result = [];
    for (i = 0; i < 5; i++) {
        var arr = [];
        var a = i;
        var b = i + 1;
        arr.push(array[a], array[b]);
        result.push(arr)
    }
    return result;
}
// function findMinDistance(array) {
//     var gap = [];
//     var result = [];
//     var min_value = 0;
//     for (var i = 0; i < array.length - 1; i++) {
//         gap.push(array[i + 1] - array[i]);
//     }
//     min_value = Math.min.apply(null, gap);
//     for (var j = 0; j < gap.length; j++) {
//         var pair = [];
//         if (gap.indexOf(gap[j]) === min_value) {
//             pair.push(array[j], array[j + 1]);
//             result.push(pair)
//         }
//     }
//     return result;
// }
// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]