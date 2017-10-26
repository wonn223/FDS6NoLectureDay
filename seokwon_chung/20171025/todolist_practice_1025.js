// (1)html구조 살펴서 어떤 데이터를 사용자로부터 받아야 하는지 체크하기
// completed : boolean, id : number, sapn : string ...
(function() {

  var todos;
  var todoList = document.getElementById('todo-list');
  var inputTodo = document.getElementById('input-todo');

  var getTodos = function() {
      // (1)-1 : 파악한 내용을 바탕으로 배열 만들기. 각 객체의 모습이 같으면서
      // 인덱스로 묶어주기 때문에 배열이 적절하다.
      todos = [
        // 최신의 데이터가 인덱스가 가장 높게 나오게 설정
        { id: 3, content: 'Angular', completed: true },
        { id: 2, content: 'Vue.js', completed: true },
        { id: 1, content: 'React', completed: true }
      ]
      render();
      console.log('[GET]\n', todos);
    }
    // 생성할 요소가 받을 아이디값 구하기  
  var lastTodoId = function() {
    var id_array = todos.map(function(todo) {
      return todo.id;
    }); // [3,2,1]

    var result = Math.max.apply(null, id_array);

    console.log('[NEWID]\n', todos);

    return result + 1;

    /* 2번째 방법
    return Math.max.apply('', todos.map(function(todo) {
      return todo.id;
    })) + 1;
     */
  }
  var addTodo = function() {
    // 요소 추가
    // todolist 목록 삭제 시에 빈 객체이거나 undefined일 때, 아이디 값이 -Infinity가 올 수 있다.
    // 위 경우에 대비한다.
    var content = inputTodo.value;
    inputTodo.value = '';
    if (!todos || todos === undefined) {
      todos = [{ id: 1, content: content, completed: false }];
    } else {
      todos = [{ id: lastTodoId(), content: content, completed: false }].concat(todos);
    }
    render();
    console.log('[ADD]\n', todos);
  }

  var toggleTodoComplete = function(id) {
    // 여기서 id는 html받아오는 값으로 문자열 형태를 띈다. 
    // 같은 아이디를 가진 요소를 찾아서 boolean값 반전
    // todo 배열을 대상으로 순회한다.
    todos = todos.map(function(todo) {
      // 컴플리트의 값을 반전해서 기존의 todo 값을  빈 리터럴에 할당하고, 
      // 이것이 다시 map의 반환형 배열에 들어가게 된다.
      return todo.id == id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
      // 객체가 여러 개면 마지막에 있는 인자가 최종적으로 새로운 리터럴에 들어가게 된다
    });
    render();
    console.log('[TOGGLE]\n', todos);
  }
  var removeToDo = function(id) {
      // 반환값이 불리언
      console.log(id);
      todos = todos.filter(function(todo) {
        return todo.id != id;
      });
      render();
      console.log('[RM]\n', todos);
    }
    //  max 반환값을 객체로 만들어서 숫자로 이루어진 배열을 만들 수 있는 방법을 찾는다.
    //  그 방법을 찾은 결과가 map함수
    //  단, todo가 배열이므로 apply함수 적용해야함.
    //  Math도 함수객체라서 함수 프로토타입 메소드인 call함수를 사용할 수 있다.

  // (2) 자료구조 설계 : 어떻게 입출력을 만들 것인가?
  const render = function() {
    // 배열 요소마다 인수로서 넘어가게 되는 콜백함수를 적용. 반환값을 안 돌려주는 게 특징이다. 매개변수는 형식이 정해져있다.   
    // (2)-1 html 변수 초기화
    // 다음 번에 사용자 입력값이 추가될 때, 초기화가 이뤄지지 않으면
    // 기존 3개 배열 + item.length만큼 계속 추가된다.
    // 1,2,3,4 -> 1,2,3,4,5  
    var html = '';
    todos.forEach(function(todo) {
        // <i>태그 : 스타일 태그, 시맨틱 태그로서는 부족함.
        // 콜백함수가 호출될 때마다 li를 전달해주는 게 목적.
        // 쉼표 오류
        var checked = todo.completed ? 'checked' : '';
        html += '<li class="list-group-item"> \
        <div class="hover-anchor"> \
          <a class="hover-action text-muted"> \
            <span class="glyphicon glyphicon-remove-circle pull-right" data-id="' + todo.id + '"></span> \
          </a> \
          <label class="i-checks" for="' + todo.id + '"> \
            <input type="checkbox" id="' + todo.id + '"' + checked + '><i></i> \
            <span>' + todo.content + '</span> \
          </label> \
        </div> \
      </li>';
      })
      // (2)-3html양식을 맞춘 js문자열은 innerHTML을 활용해 html에 삽입할 수 있다.
      // 단, +=를 쓰면 html이 중복되어 나타나므로 주의한다.
    todoList.innerHTML = html;
    // (2)-4 돔 작업이 완료되고, 데이터에 접근할 수 있는 함수 호출
  }

  window.addEventListener('load', getTodos);

  // (3)사용자 입력값을 목적으로 접근자 지정
  // (3)-1 addTodo

  // 참고) on-접두어는 돔레벨2 이전에 html 태그에 직접 적용할 때 사용했다.
  // 참고2) 매개변수는 구체적인 필요가 있을 때 사용한다.
  inputTodo.addEventListener('keyup', function(e) {
    // keyup시 체크사항
    // 빈 문자열에 엔터키를 눌렀는가? 유의미한 문자열인가?
    // 아래 코드는 빈 칸값을 방어하지 못한다. 그래서 inputTodo.value보다
    // 빈 칸을 없애는 trim 메소드를 활용한다. trim은 원본값은 변경하지 않으므로 검사에 적당하다.
    // trim메소드도 빈 칸 + 문자열의 경우에 입력을 받지 않는다.결국 정규표현식이 가장 적당하다.
    if (e.keyCode !== 13 || inputTodo.value.trim() === '') return;
    addTodo();
  })

  todoList.addEventListener('change', function(e) {
    // input id태그에 접근
    toggleTodoComplete(e.target.id);
  })

  todoList.addEventListener('click', function(e) {
      var target = e.target; // 알리아스, 별칭으로 참조 기능을 한다.   
      removeToDo(target.dataset.id);
    })
    // 사용자정의를 저장하고 있는 프로퍼티 dataset. 구 버전에서는 호환이 어려울 수 있다.


}())