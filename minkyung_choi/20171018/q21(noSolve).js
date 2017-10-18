//#21. 최단 거리 1 차원 점의 쌍 구하기(DAUM)
//1 차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들) 의 쌍을 배열로 반환하는 함수를 작성하라.
//(단 점들의 배열은 모두 정렬되어있다고 가정한다.) 
//예를들어[1, 3, 4, 8, 13, 17, 20, 23, 24] 이 주어졌다면, 결과값은[[3, 4], [23, 24]] 가 될 것이다.


function findMinDistance(array) {
  var min = [];
  var idx = [];
  var pair = [];

  for (var i = 1; i < array.length; i++) {
    pair.push([array[i - 1], array[i]]);
  }

  for (var j = 0; j < pair.length; j++) {
    min.push(pair[j].join(','));
  }
  //console.log(min);
  var minIdx = Math.min.apply(null, min);

  // for (var j = 0; j < res.length; j++) {
  //   if (res[j] === min) {
  //     idx.push(j);
  //   }
  // }
  // minRes = [array[idx[0]], array[idx[1]]];
  //console.log(res);
}


var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]