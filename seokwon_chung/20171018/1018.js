// # 16. 두 정수 사이의 합
// adder함수는 정수 x, y를 매개변수로 입력받는다.
// 두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하라.
// x와 y가 같은 경우는 둘 중 아무 수나 리턴한다.
// x, y는 음수나 0, 양수일 수 있으며 둘의 대소 관계도 정해져 있지 않다.
// 예를들어 x가 3, y가 5이면 12를 리턴한다.

function adder(x, y) {
  var int = 0;
  for (var i = x; i <= y; i++) {
    int += i;
  }
  return int;
}
console.log(adder(3, 5)); // 12

// # 17. 배열의 첫 요소와 마지막 요소로 배열 만들기
// 배열의 첫 요소와 마지막 요소를 나타내는 정수를 인자로 받아 
// 정수의 배열을 반환하는 함수를 완성하라. 예를 들어 인수가 [10, 15]인 경우,
// [ 10, 11, 12, 13, 14, 15 ]를 반환한다.

function generateRange(from, to) {
  //인자값을 정수로
  var IntFrom = Math.round(from);
  var IntTo = Math.round(to);

  const res = [];
  //배열에 정수 삽입 
  for (var i = IntFrom; i <= IntTo; i++) {
    res.push(i);
  }
  return res;
}
console.log(generateRange(10, 15));


// # 18. 배열의 인접한 요소곱 중 가장 큰 값 구하기
// 정수의 배열에서 인접한 요소의 곱이 가장 큰 값을 반환하는 함수를 완성하라.
// 예를 들어 인수가 [3, 6, -2, -5, 7, 3]인 경우, 21을 반환한다.

function adjacentElementsProduct(arr) {
  var arr2 = arr;
  var Multiple = [];
  for (var i = 0; i < arr.length - 1; i++) {
    Multiple.push(arr[i] * arr[i + 1]);
  }
  return Math.max(...Multiple);
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21


// # 19. 배열에서 특정 값만을 구하기
// 배열 arr에서 짝수이고 3보다 큰 수만을 구하여 이를 배열로 반환하는 함수를 작성하라.

function getArray(arr) {
  var arrElem = [];
  var res = arr.filter(function(item, index) {
    return item > 3 && !(item % 2)
  })
  return res;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log(getArray(arr)); // [ 4, 6 ]

// # 20. 평균구하기
// 배열을 인자로 전달받아 각 요소의 평균을 구하는 함수를 완성하라.

function average(array) {
  var arr = array.reduce(function(preValue, currValue, currIndex, array) {
    return Math.floor((preValue + currValue) / currIndex - 1);
    // return (preValue + currValue) / currIndex;
  })
  return arr;
}
var testArray = [5, 3, 4];
console.log(average(testArray)); // 4

// #21. 최단 거리 1 차원 점의 쌍 구하기(DAUM)
// 1 차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들) 의 쌍을
// 배열로 반환하는 함수를 작성하라.(단 점들의 배열은 모두 정렬되어있다고 가정한다.)
// 예를들어[1, 3, 4, 8, 13, 17, 20, 23, 24] 이 주어졌다면,
//   결과값은[[3, 4], [23, 24]] 가 될 것이다.

function findMinDistance(array) {
  var arr = [];
  //거리값이 들어간 배열 생성
  var arrSub = array.filter(function(item, index, array) {
      arr.push(array[index] - array[index + 1]);
      return arr;
    })
    //유효하지 않은 마지막 요소 제거.
  var dummy = arr.pop();
  dummy = null;
  //가장 짧은 거리값이 나온 인덱스만 정렬
  var shortDistance = arr.map(function(item, index) {
    return item === -1 ? index : undefined;
  })
  var sortItem = shortDistance.sort()
    // 나머지 배열값에서 짧은 거리값만 추출 
  var idx = sortItem.splice(0, 2);
  var res1 = ['[' + array[idx[0]] + ',' + array[idx[0] + 1] + ']'];
  var res2 = ['[' + array[idx[1]] + ',' + array[idx[1] + 1] + ']'];
  var result = res1.concat(res2);

  return result;
}
// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]

// #
// 22. 특별한 정렬
// n개의 정수를 가진 배열이 있다.이 배열은 양의 정수와 음의 정수를 모두 가지고 있다.
// 이 배열을 좀 특별한 방법으로 정렬해야 한다.음의 정수는 앞쪽에 내림차순으로,
//   양의 정수는 뒷쪽에 있어야 한다.단, 인수로 주어진 원본 배열은 변경되지 않아야 한다.
// 예를 들어, [-1, 1, 3, -2, 2, 0] 이 주어졌을 때, [-1, -2, 0, 1, 2, 3] 를 반환한다.

function specialSort(array) {
  var arr = array.sort();
  return arr;
}
var testArray = [-1, 1, 3, -2, 2, 0];
// console.log(testArray); [ -1, 1, 3, -2, 2, 0 ]
console.log(specialSort(testArray)); // [ -1, -2, 0, 1, 2, 3 ]


// # 미완료
// 23. 임의 범위 내의 각 숫자 분해하여 곱한 값의 전체 합
// 임의 범위 내의 각 숫자를 분해하고 분해한 값을 곱한 후, 곱한 값의 전체 합을 구하는 함수를 완성하라.
// 예를 들어, 예로, 10~13 까지의 각 숫자 분해하여 곱한 값의 전체 합은 다음과 같다.

// 10 = 1 * 0 = 0
// 11 = 1 * 1 = 1
// 12 = 1 * 2 = 2
// 13 = 1 * 3 = 3
// 0 + 1 + 2 + 3 = 6

function multiSum(from, to) {
  console.log(from.toString());
  var fromArr = '';

  for (var i = from; i <= to; i++) {
    for (var j = 1; j <= i.length - 1; k++) {
      fromArr += (i.toString());
    }
  }
  console.log(fromArr);
  // var a = fromArr.toString().split(' ').join();
  // for (var i = 0; i < to.length; i++){
  //      console.log(a[i].toString().split(','));
  // }

  // fromArr.forEach(function(item, index, array) {
  //   // console.log(array[index]);
  // })
}
console.log(multiSum(10, 13)); // 6
console.log(multiSum(10, 1000)); // 93150

// #
// 24. 각 자릿수의 합 구하기
// 정수 n이 주어지면, n의 각 자릿수의 합을 구해서
// return 하는 digitSum 함수를 완성하라.
// 예를들어 n = 123 이면 1 + 2 + 3 = 6 을 return한다.
// 단, n은 100, 000, 000 이하의 정수로 한다.

function digitSum(n) {
  var num = n;
  //스트링으로 형변환 후 요소를 하나씩 구분. split결과로 num은 배열. 
  num = n.toString().split('');
  var sum = 0;
  var itemSum = num.forEach(function(item, index) {
    // value(item)를 number형으로 변환해서 새 변수에 할당
    sum += item * 1;
  })
  return Number.isInteger(n) && n < 100000000 ? sum : false;
}
console.log(digitSum(123)); // 6
console.log(digitSum(987)); // 24
console.log(digitSum(100000001)); // false


// #25. 중복없는 배열
// 길이가 n인 배열에 1 부터 n까지 숫자가 중복 없이 한 번씩 들어 있는지를 확인하려고 한다.
// 1 부터 n까지 숫자가 중복 없이 한 번씩 들어 있는 경우 true를, 아닌 경우 false를 반환하도록
// 함수 isNotOverlapArray을 완성하라.단, 배열의 요소는 정수이다.
// 예를들어 주어진 배열이[4, 1, 3, 2] 이라면 true, [4, 1, 3] 또는[1, 3] 이라면 false를 반환한다.

function isNotOverlapArray(array) {
  // 1부터 n까지 순차배열
  var sortArr = array.sort(function(a, b) {
    return a - b;
  });
  // console.log(sortArr);
  // 순차배열에서 빠진 숫자가 없는지 체크. 
  // 순차배열이라면 아이템 간의 뺄셈 결과가 절대값으로 1이어야하고, 
  // 인덱스 만큼 뺄셈이 일어남. 인덱스 값과 총 뺄셈 값이 같으면 순차배열. 
  var idxCounter = sortArr.length - 1;
  for (var i = 0; i < sortArr.length - 1; i++) {
    idxCounter -= Math.abs(sortArr[i + 1] - sortArr[i]);
  }
  return idxCounter === 0 ? true : false;
}
console.log(isNotOverlapArray([4, 1, 3, 2])); // true
console.log(isNotOverlapArray([4, 1, 3])); // false