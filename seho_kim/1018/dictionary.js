// Dictionary(Map)는 중복되지 않는 값을 저장하기 위한 자료구조
// Set이 원소 값에 초점을 두었다면, 딕셔너리는 값을 key,value 형태로 저장한다
// Set과 마찬가지고 ES6에서 Map이 추가됨
// ES6명세를 기반으로 한 Dictionary구현

var Dictionary = function() {
    var items = {};

    // 딕셔너리에 원소를 추가
    this.set = function(key, value) {
        items[key] = value;
    };

    // key값에 해당하는 원소를 삭제
    this.remove = function(key) {
        if(this.has(key)) {
            delete items[key];
            return true;
        }

        return false;
    };

    // key값에 해당하는 원소의 존재유무를 boolean값으로 리턴
    this.has = function(key) {
        return key in items;
    };

    // key값에 해당하는 원소의 값을 리턴
    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    };

    // 모든 원소를 삭제
    this.clear = function() {
        items = {};
    };

    // 원소의 개수를 리턴
    this.size = function() {
        return Object.keys(items).length;
    };

    // key값을 배열로 리턴
    this.keys = function() {
        return Object.keys(items);
    };

    // value값을 배열로 리턴
    this.values = function() {
        var values = [];
        for(var key in items) {
            if(this.has(key)) values.push(items[key]);
        }

        return values;
    };

    // 딕셔너리를 담은 객체를 리턴
    this.getItems = function() {
        return items;
    }
};

var dictionary = new Dictionary();
dictionary.set('kim', 'kim@gmail.com');
dictionary.set('lee', 'lee@gmail.com');
dictionary.set('park', 'park@gmail.com');

console.log(dictionary.has('kim'));
console.log(dictionary.size());

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get('kim'));

dictionary.remove('lee');
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());

