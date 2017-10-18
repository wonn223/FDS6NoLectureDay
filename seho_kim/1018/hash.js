// 해싱(Hashing)은 자료구조에서 특정 값을 가장 신속하게 찾는 방법이다
// 해시의 충돌을 처리하는 방법으로 Open Address, Separate Chaining 등이 있다

var HashTable = function() {
    var table = [];

    // 해시 함수(key를 구성하는 문자의 코드 값을 더함)
    var loseloseHashCode = function(key) {
        var hash = 0;
        for(var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        // 중복값이 발생
        return hash % 37;
    };

    // 원소를 추가/수정한다
    this.put = function(key, value) {
        var position = loseloseHashCode(key);
        // 해시값 확인
        console.log(`${position} - ${key}`);
        table[position] = value;
    };

    // key에 해당하는 원소를 찾아 삭제한다
    this.remove = function(key) {
        // 원소 자체를 삭제할 필요는 없다. 어차피 key값을 기준으로 배열에 할당되어 있기 때문에, 이미 빈 공간이 많이 존재한다
        // 아래의 테스트 케이스를 실행해보면 key는 25, 14, 23에 할당되고, 나머지는 어차피 전부 undefined가 할당된 빈 공간이다
        table[loseloseHashCode(key)] = undefined;
    };

    // key에 해당하는 원소를 찾아 그 값을 리턴한다
    this.get = function(key) {
        return table[loseloseHashCode(key)];
    };

};

var hash = new HashTable();
hash.put('kim', 'kim@gmail.com');
hash.put('lee', 'lee@gmail.com');
hash.put('park', 'park@gmail.com');

console.log(hash.get('kim'));
console.log(hash.get('lee'));

hash.remove('lee');
console.log(hash.get('lee'));

// 해시값의 충돌을 테스트
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');