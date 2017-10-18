//#23. 임의 범위 내의 각 숫자 분해하여 곱한 값의 전체 합
//임의 범위 내의 각 숫자를 분해하고 분해한 값을 곱한 후, 곱한 값의 전체 합을 구하는 함수를 완성하라.
//예를 들어, 예로, 10~13 까지의 각 숫자 분해하여 곱한 값의 전체 합은 다음과 같다.
// 10 = 1 * 0 = 0
// 11 = 1 * 1 = 1
// 12 = 1 * 2 = 2
// 13 = 1 * 3 = 3
// 0 + 1 + 2 + 3 = 6 
function multiSum(from, to) {
  var sum = 0;

  for (var i = from; i <= to; i++) {
    var str = i.toString();
    for (var j = 0; j < str.length; j++) {
      sum += str.charAt(j) * str.charAt(j + 1);
    }
  }
  return sum;
}
console.log(multiSum(10, 13)); // 6
console.log(multiSum(10, 11)); // 1
console.log(multiSum(10, 12)); //3
console.log(multiSum(10, 1000)); // 40500