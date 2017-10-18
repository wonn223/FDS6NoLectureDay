//#24. 각 자릿수의 합 구하기
//정수 n이 주어지면, n의 각 자릿수의 합을 구해서
//return 하는 digitSum 함수를 완성하라.
//예를들어 n = 123 이면 1 + 2 + 3 = 6 을 return한다.단, n은 100, 000, 000 이하의 정수로 한다.

function digitSum(n) {
  var num = n + ' ';
  var sum = 0;
  len = num.length;

  if (n > 1000000000) {
    return sum = false;
  } else {
    for (var i = 0; i < len; i++) {
      sum += num.charAt(i) * 1;
    }
  }
  return sum;
}
console.log(digitSum(123)); // 6
console.log(digitSum(987)); // 24
console.log(digitSum(1000000001)); // false