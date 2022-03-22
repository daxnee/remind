### 220322
### Jquery
```
요소 = 태그

```

### Java를 왜 배울까? ★
```
html과 DB를 연결할 수 없기 때문에 중간에서 java가 연결해주는 역할을 한다.
html ---(이 과정에서 jquery가 기능을 한다)----> java ------> DB

```

### attr : 태그 요소(속성) 가져오기
```js
태그에 있는 id, class, value,  selected 등등을 '속성'이라고 칭함.
$('.red').attr('id') // red 태그의 id를 호출
$('.red').attr('id', 'black'); // red 태그의 id를 black으로 변경
// attr(속성 종류 , 바꾸고자 하는 value)

$('.red').attr('style', 'background-color: skyblue'); // css 변경도 가능함

```

### jquery 배우는 목적
```
: 쿼리로 html 태그들을 조작할 수 있는 점
  (동작원리 등 깊게 들어갈 필요 없다! 구글링으로 해결할 수 있으면 됨)

```

### 로딩시 가장 먼저 실행하는 함수
```js
$(function(){});

```
### each (구글링) : 반복문을 의미

```
<for문>
for(int i=0; i<3; i++) // i<3 이라는 범위가 지정됨

<for-each문>
array = [1,2,4,5,10] // 배열의 길이까지만 for문 작동 (지정된 범위 없음)
for(i : array)  

* for문과의 차이점
: 범위 지정의 유무

```

### this , super 구글링 (구글링)

이벤트 안에 사용된 this
: 이벤트를 받는 html을 가리킴.


생성자 안에 사용된 this
: 생성자 함수가 생성하는 객체로 this가 바인딩 됨.