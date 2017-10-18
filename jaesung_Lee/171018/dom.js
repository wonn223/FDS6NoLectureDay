var newElem = document.createElement('li');
// var newElem = document.createElement('<li>test</li>');
// Uncaught DOMException: Failed to execute 'createElement' on 'Document': The tag name provided ('<li>test</li>') is not a valid name.

// 텍스트 노드를 생성
var newText = document.createTextNode('Beijing');

// 텍스트 노드를 newElem 자식으로 DOM 트리에 추가
newElem.appendChild(newText);

var container = document.getElementsByTagName('ul')[0];

// newElem을 container의 자식으로 DOM 트리에 추가
container.appendChild(newElem);

var removeElem = document.getElementById('one');

// container의 자식인 removeElem 요소를 DOM 트리에 제거한다.
container.removeChild(document.getElementById('one'));