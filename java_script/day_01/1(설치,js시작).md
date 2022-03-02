## 220228

### 정적 웹/ 동적 웹
``` 
지금까지 배운 웹 => 정적 웹(HTML + CSS + JavaScript)

- SCSS (기존 CSS 버전 업)

- JavaScript(버전 업이 빠름) 
: 팝업창 구현, 서버 데이터 처리

진도는 JavaScript 버전5으로 나간다.(범용성)
*React(made by 페북)*, Angular, Vue (버전 6 이상으로 구현된 자바스크립트)

앞으로의 진도?
JavaScript 버전 5
Node.js 설치해서 JavaScript 공부를 
바닐라.js로 배우겠다.
```
### Node.js 설치하기
```
1. LTS 버전으로 설치
2. 설치 중 동의, next, agree 계속 진행
3. cmd창에 node -v 입력 후 버전 확인하기
4. 폴더 생성
5. index.js 파일 만들기
6. console.log('Hello World');
7. 상단의 Terminal - New Terminal 
8. 아래 창에 node i 까지 입력 후 tab키 누르기 (node 다음 스페이스바 간격 띄어주기)
9. Hello World 글자 확인
10. 설치 후 vscode를 재시작해야 node.js 사용이 가능하다.


```

### js
```js
js는 콜론, 세미콜론 구분 안 함 (안 찍어도 되지만 찍는걸 추천)
js는 데이터타입이 var 하나뿐이다.

var x = 10;
var y = '안녕하세요';
console.log('x의 값은?'+ x);
console.log('y의 값은?'+ y);
console.log('blah blah');

var num = 10;
var num2 = 20;
var result = num+num2;
console.log(result);
if(result == 30){
    console.log('30입니다.')
}

var num = 10;
var num2 = 20;
var result = num2-num;
console.log(result);
if(result == 10){
    console.log('10입니다.')
}

for(var i=0; i<10; i++){
if(i%2 == 0){
console.log(i + '는 짝수입니다.')
}
}

for(var i=0; i<10; i++){
    if(i%2 == 1){
        console.log(i + '는 홀수입니다')
    }
}
```