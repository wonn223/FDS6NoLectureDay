# Ajax(Asynchronous JavaScript and XML)
- 자바스크립트를 이용해서  비동기적(Asynchronous)으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 방식이다.
- 서버로부터 웹페이지가 반환되면 화면 전체를 갱신해야 하는데 페이지 일부만 갱신하고도 동일한 효과를 볼 수 있도록 하는 것이다.
- Client에서 HTTP Request 객체를 이용해 데이터를 요청한다. 
- Server에서 HTTP Response 객체를 이용해 server의 응답에 요청한다.
- 데이터를 반환할 때 데이터 형식은 문자열로 받은 객체를 JSON으로 변경하거나, JSON을 객체화 시키는 두가지가 있다.


# JSON (JavaScript Object Notation)
- HTML, Text, JSON 등을 반환하는데 Ajax을 위한 데이터 형식이다.
- 쌍 따옴표를 사용한다.(프로퍼티 이름도)
- 객체리터럴과 흡사하나, 순순한 텍스트로 구성되었다.
- 코멘트, 주석을 쓰면 에러가 발생한다.

# 데이터 형식

## 객체 -> JSON 형식의 문자열 
- JSON.stringify(객체)

``` javascript
var obj = {
    name : 'Choi',
    gender : 'female',
    age : 20
};

var strObj = JSON.stringify(obj);
console.log(typeof strObj, strObj);
// string {"name":"Choi","gender":"female","age":"20"}
```
- 개발자가 데이터 확인할 때,(편의성, 가독성)
- JSON.stringify(obj, 필터함수, 공백갯수) 의 인자값을 준다.
- 필터 함수는 직접 함수를 정의한다. (원하는 데이터만 출력하기 위해 작성)
- 공백갯수는 프로퍼티 앞의 공백의 갯수를 말한다. 개발자의 가독성을 위해 준다. 


## JSON 형식의 문자열 -> 객체
- JSON.parse(문자열)
- 역직렬화
``` javascript
var o = JSON.parse(stObj);
//strObj =  {"name":"Choi","gender":"female","age":"20"}

console.log(typeof o, o);
//o {name:'Choi',gender:'female',age:'20'}
```


# XMLHttpRequest
- 브라우저는 XMLHttpRequest 객체를 이용하여 Ajax 요청을 생성하고 전송한다.

## Ajax request
- Ajax 요청 처리

``` javascript
//XMLHttpRequest 객체 생성
var xhr = new XMLHttpRequest();
//비동기 방식으로 Request를 오픈한다.
xhr.open('GET', '/users');
//Request를 전송한다.
xhr.send();
```

1. XMLHttpRequest.open
- XMLHttpRequest 객체의 인스턴스를 생성하고 open메소드를 사용하여 서버로의 요청을 준비한다.
- XMLHttpRequest.open(method, url, async)
- method : HTTP method(GET, POST, PUT, DELETE 등)
- url : 요청을 보낼 URL, 한서버에서만 요청을 주고 받기 때문에(파일을 전달받은 서버와 같은 서버) 주로 같은 경로를 사용한다.
- async : 비동기 조작 여부, default는 true(비동기)

2. XMLHttpRequest.send
- 준비된 요청을 서버에 전달한다.
- GET, POST 메소드에 따라 전송방식에 차이가 있다.
- GET 메소드는 URL의 일부분인 쿼리문자열(쿼리 파라미터)로 데이터를 서버로 전송한다.
- POST 메소드는 데이터(payload)를 Request body에 담아 전송한다.(payload:body에 담기는 data)
- XMLHttpRequest.send 메소드는 request body에 담아 전송할 인수를 전달 할 수 있다.
- HTTP Request/Response Message Pair 에는 Header와 Body가 있는데, Header에는 전달하려는 요청 정보를 담는다.
- **요청 메소드가 GET인 경우 send메소드의 인수는 무시되고 request body는 null로 설정된다.

3. XMLHttpRequest.setRequestHeader
- HTTP Request Header 값을 설정한다.
- Request Header의 Content-type은 request body에 담아 서버로 전송할 데이터의 MIME-type을 지정한다.
- Request header의 Accept는 클라이언트가 서버에 요청할 때 서버가 센드백할 데이터의 MIME-type을 지정한다.
- Accept 헤더를 설정하지 않으면 */*으로 전송된다.
- setReuqestHeader 메소드는 반드시 open메소드 뒤에 호출한다.

``` javascript
req.open('POST','/users');
//application/x-www-form-urlencoded는 key=value&key=value...형태로 전송
req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//서버가 센드백할 데이터의 MIME-type : json
req.setRequestHeader('Accept','application/json');
```


## Ajax response
- Ajax 응답 처리

``` javascript
// request(요청방식)와 동일
// 비동기방식으로 (XMLHttp)Request를 오픈한 후, 전송
var req = new XMLHttpRequest();
req.opne('GET', 'data/test.json');
req.send();

//readyState 프로퍼티가 변경될 때마다 콜백함수를 호출한다.
req.onreadystatechange = function(e){
//readyState: XMLHttpRequest 상태(state)를 반환
// 4(DONE) : 서버 응답 완료
    if(req.readyState === XMLHttpRequest.Done){
        // response 상태 코드를 반환, 200(정상 응답)
        if(req.status === 200){
            //텍스트(데이터) 출력
            console.log(req.responseText);
        }else{
            console.log("Error!");
        }
    }
};

```
# localhost 
- 내 PC에 깔려있는 웹서버(가상 서버)
- localhost:port
- 웹서버마다 port를 설정해준다.
- 가상 서버(localhost)에서 실제 서버로 보내는 것을 배포라고 한다.
