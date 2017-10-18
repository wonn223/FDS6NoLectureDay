

var LinkedList = function() {
    
    // 헬퍼 클래스
    var Node = function(element) {
        this.element = element;
        this.next = null;
    };

    // 원소의 개수
    var length = 0;
    // 연결이 시작되는 지점을 참조
    var head = null;
    
    // 리스트에 맨 끝에 원소를 추가
    this.append = function(element) {
        var node = new Node(element);
        var current;

        if(head === null) {
            head = node;
        } else {
            current = head;

            // 마지막 원소를 발견할때까지 계속 루프
            while(current.next) {
                current = current.next;
            }

            // 마지막 원소를 링크할 수 있게 다음 노드에 할당
            current.next = node;
        }

        length++;
    };

    // 해당 위치에 원소를 추가
    this.insert = function(position, element) {

        // 유효범위 체크
        if(position >= 0 && position < length) {
            var node = new Node(element);
            var current = head;
            var previous;
            var index = 0;

            if(position === 0) {
                node.next = current;
                head = node;
            } else {
                // 추가할 위치까지 이동
                while(index++ <position) {
                    previous = current;
                    current = current.next;
                }

                // 링크를 변경
                node.next = current;
                previous.next = node;
            }

            length++

            return true;

        } else {
            return false;
        }
    };

    // 원소를 삭제
    this.removeAt = function(position) {

        // 유효범위 체크
        if(position >= 0 && position < length) {
            var current = head;
            var previous;
            var index = 0;

            if(position === 0) {
                head = current.next;
            } else {
                // 삭제할 위치까지 이동
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }

                // current를 삭제
                previous.next = current.next;
            }
            
            length--;
        } else {
            return null;
        }
    };

    this.remove = function(element) {
        // indexOf메서드를 이용해 위치를 구하고
        // removeAt메서드를 이용하여 삭제
        var index = this.indexOf(element);
        return this.removeAt(index);
    }
    
    // 해당 원소의 인덱스를 리턴
    this.indexOf = function(element) {
        var current = head;
        index = 0;

        while(current) {
            if(element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }

        return -1;
    };

    // 연결 리스트가 비어있는지 확인
    this.isEmpty = function() {
        return length === 0;
    };

    // 원소의 개수를 리턴
    this.size = function() {
        return length;
    };

    // 원소를 Node에 담아두기 때문에, 원소의 값을 출력하려면 toString메서드를 재정의 해야 한다
    this.toString = function() {
        var current = head;
        var string = '';

        while(current) {
            string += current.element;
            current = current.next;
        }

        return string;
    };

    this.print = function() {
        console.log(this.toString());
    };

    this.getHead = function() {
        return head;
    }
};