### 220331
### HTTP (Hyper Text Transfer Protocol)

: 하이퍼 텍스트(html)를 전송해주는 약속 * Protocol : 약속, 규칙, 규격

---
### HTTP의 5가지 메소드

1. HTTP 기능(method of function) HTTP 안에 대표적으로 4개의 메소드가 있음 (구글링)

2. GET : 데이터 조회 (Select와 같은 의미. 리소스 조회 => HTTP안에 GET이 있으면 select 기능이 필요하구나 라고 서버가 인식해서 DB에 명령을 내림)

3. POST : Insert

4. DELETE : delete

5. PATCH : update

* PUT : 리소스를 대체, 해당 리소스가 없으면 생성.(크게는 6가지..?)

---
### HTTP와 JSON의 관계도
```

HTML ---------------------------------------------------------------------------------> Server (JAVA or Node.js)
            HTTP에 JSON과 메소드를 담아서 전송(이 것들을 지위하는 역할이 Jquery!)

```

- HTTPS? 
: HTTP는 보안에 취약함. server를 붙여줌으로써 보안을 지켜줌.

- URL 
: 서버의 주소. 이제 우린 URL 주소라고 부르는 대신 'API'라고 불러야 됨 ex) API 주소 보내주세요~ 
API(Application Programming interface)

- Application : 소프트웨어(프로그램) 
 interface: 상호작용
---
### 문법
```js
$.ajax(
    {// json으로 정의함
        url : API주소 // 목적지
        type : HTTP Method (4가지 중 택1)
        dataType : Json or Text (거의 json 사용)// 서버응답 데이터 (서버에서 온 응답을 json으로 받겠다)
        success :  function(){ 
            // HTML에서 요청 성공하면 익명함수 파라미터에 값을 대입해줄게! ex) function(응답)

        }, error : function(request, status, error)
    }
)
error 코드
404 : 없는 주소
500 : 서버 내부결함(에러)
403 : 권한 없음

```
---
### ajax : 비동기전송

- 비동기전송 : ex) 카톡으로 고화질 이미지를 전송하고 그 시간동안 다른 사람과 실시간으로 채팅(작업)할 수 있는 것. 

- ajax로 서버에 요청을 보내고 다른 function들이 기능할 수 있게 코딩하면 된다.

---
### github 토큰 발급 방법

Setting ->
왼쪽 side nav에 Developer settings ->
new apps ->
repo 클릭 ->
user 
