// Set은 정렬되지 않은 컬렉션으로 원소가 중복되지 않는다
// ES6에서 Set과 Map이 추가됨
// ES6명세를 기반으로 한 Set구현

var Set = function() {
    var items = {};

    // 원소를 추가
    this.add = function(value) {
        if(!this.has(value)) {
            items[value] =  value;
            
            return true;
        }

        return false;
    };

    // 원소를 삭제
    this.remove = function(value) {
        if(this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };

    // 원소의 포함여부
    this.has = function(value) {
        // return value in items;
        return items.hasOwnProperty(value);
    };

    // 모든 원소를 삭제
    this.clear = function() {
        items = {};
    };

    // 원소의 개수를 리턴
    this.size = function() {
        return Object.keys(items).length;
    };

    // 원소를 배열 형태로 리턴
    this.values = function() {
        return Object.keys(items);
    };

    // 합집합
    this.union = function(otherSet) {
        var unionSet = new Set();

        // 기존 집합
        var values = this.values();
        for(var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        // otherSet으로 넘겨받은 집합
        values = otherSet.values();
        for(var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        return unionSet;
    };

    // 교집합
    this.intersection = function(otherSet) {
        var intersectionSet = new Set();

        var values = this.values();
        for(var i = 0; i < values.length; i++) {
            if(otherSet.has(values[i])) intersectionSet.add(values[i]);
        }

        return intersectionSet;
    };

    // 차집합
    this.difference = function(otherSet) {
       var differenceSet = new Set();

        var values = this.values();
        for(var i = 0; i < values.length; i++) {
            if(!otherSet.has(values[i])) differenceSet.add(values[i]);
        }

        return differenceSet;
    };

    // 부분집합
    this.subset = function(otherSet) {
        
        // 사이즈가 더 크면 애초에 부분집합이 될 수 없음
        if(this.size() > otherSet.size()) {
            return false;
        } else {
            var values = this.values();
            for(var i = 0; i < values.length; i++) {
                // 요소가 없다면 부분집합이 되지 못한다
                if(!otherSet.has(values[i])) return false;
            }
        }
        // 필터링 조건을 모두 통과하지 못하면 이 리턴문에 도달할 수 없다
        return true;
    };
};

var set = new Set();

set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());

set.add(2);
console.log(set.values());
console.log(set.has(2));
console.log(set.size());

set.remove(1);
console.log(set.values());

set.remove(2);
console.log(set.values());

// union 테스트
var setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(6);

var setB = new Set();
// 테스트를 위해 3, 6을 중복으로 넣어줌
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

var unionAB = setA.union(setB);
// 3, 6을 중복시켰지만 add메서드 내의 has필터가 필터링
console.log(unionAB.values());

var intersectionAB = setA.intersection(setB);
// 중복된 3, 6이 출력
console.log(intersectionAB.values());

var differenceAB = setA.difference(setB);
// 중복된 3, 6을 제외하여 출력
console.log(differenceAB.values());

var setA = new Set();
setA.add(1);
setA.add(2);

var setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

console.log(setA.subset(setB));