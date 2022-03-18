### 220317

### 복습 
```
- vanilla js는 이런 형식으로 쿼리를 작성함.
document.getElementBy id,
                      class


-  jquery는 문법이 조금 다르다.
$('.className').append
               .css('display')
               .css('display', 'block') 
               <!-- display를 block으로 replace 하겠다 -->
```
### 자주 사용하는 Jquery
```
1. show, hide
2. append(해당하는 태그에 원하는 태그를 붙여줌)
3. children
4. val, text, focus *****
5. attr 

```
### append로 item 한번에 여러개 추가하기
```js
 function createItem(){
        for (var i =0; i<5; i++){
        $('.row').append(' <div class="item"></div>');
    }
}


```
### 바인딩 : on()으로 이벤트를 받을 준비 
```
  .on('click',function(){});
  => click하면 function을 실행 
  이벤트 받고 {} 안에 행동들 실행

  Key point! : 자바스크립트는 매개변수에 함수를 넣을 수 있다(사용 가능!


  function뒤에 함수명이 없음 : 익명함수
```
### 클로저 : js는 return에 함수를 구현할 수 있다.(자유로움. 자바는 안됨)
```js
ex) 
 function name() {
     return function namex(){

     }
 }
```

### js는 함수를 구현하는 방법이 크게 두가지다
```js
1. 
 $('#children').on("click",function() {
        console.log("hello world");
    } );

// fuction(){여기에 입력한 행동들을 실행하는 함수}

2. 
   function createItem(){
        for (var i =0; i<5; i++){
        $('.row').append(' <div class="item"></div>');
    }
}
// 기존에 알던 함수정의 방법. for(row태그에 div.item을 생성한다) => 6번 반복

```
### 구매 개수 제한
```js
  $('#children').on("click",function() {
       var len = $(".row").children().length;
       console.log(len);
    } );
```


### children() : 자식 태그의 정보 호출
```js

- children().length;: 해당 태그의 자식이 몇 개인지(배열 길이)

- children()[ index 번호 ]로 배열호출 가능
ex) children()[0].

$("#children").on('cilck',function(){
var len = $("row").children().length;
// len = 자식의 길이를 변수 대입
console.log($(".row")children());
//  부모 태그 기준으로  row가 자식에 대한 정보 호출
console.log($(".row").children()[0].innerText);
}); 
//  0번째 자식 태그의 innerText를 가져오겠다 
// on = click하면 function(){ } 을 실행하겠다.

*children은 자식만 찾을 수 있음
손자를 찾는 방법은? find (족보를 찾아줌)

```
### append()
```

부모 태그에 붙여주면 
자식 태그가 생성됨

포스트잇이라고 생각하면 됨 
a태그에 붙였다가 b태그에도 붙일 수 있음 

ex)  function removeItem() {
        $('#myMenu').append();
        }

   =>  id가 myMenu인 부모 태그에 자식 태그를 생성해줘 (이동)
```


### 아이템 길이 체크하기
```js
  function createItem(){
        var len =  $(".row").children().length; 
        // row의 자식 태그가 몇 개인지
        if(len < 6){
            for (var i =0; i<5; i++){
                // 아이템이 배열이기 때문에 0번째 부터 시작하니까 i<5;
             $('.row').append(' <div class="item"></div>');
            }
        }else{
          alert("아이템 길이가 6을 넘었습니다")
        
        }
       }
```

### 제이쿼리 설명
```
- id면 # , 클래스이면 .

방법1(vallia.js)
: document.getElementById('name').style 

방법2(Jquery)
: $('#name').show()

ex) 제이쿼리 hide 함수 호출
$('#name').hide()

```
### this : 본인 , super : 부모
```js
 <div class="item" onclick="clickItem(this)">한가람식당</div>


 <script>
        function clickItem(value){
            console.log(value);
        }
</script>

=> div.item을 클릭하면 웹페이지 f12 console창에 item에 관한 모든 정보를 볼 수 있다. 

 <script>
        function clickItem(value){
            console.log(value);
        }
</script>

```

### 객체지향/ 절차치향
``` 
객체지향프로그램에서 통용되는 개념
객체지향프로그램 : 자바, 파이썬, js ,node, 리액트, C++, C#

*절차지향 프로그래밍 : C, 코볼...(거의 다 오래된 언어들)
```


### 쿼리 짜기 전에 '플로우 차트' 먼저 짜야 한다.
```
주문
myMenu에 데이터가 있음 or 없음
있으면
곱창파스타에 메뉴가 있음  or 없음 -- 여기서 for문 사용
Y : alert("재료 소진입니다")
N : alert(주문메뉴 + 주문수량)

```


### 
```js
<div class="col" onclick="removeItem(this)">곱창 파스타</div>

 function removeItem(val) {
        $('myMenu').append(val);
        }

// 함수 (인자값) 
// 원래는 비어있지만 위 this(자신의 값)이 있기 때문에 함수호출시 인자값을 넣어줘야 한다. (이름은 아무거나, 위 아래 똑같이 맞춰줌) 
```

### 예약어는 변수명이 안된다.
```
new, this, super,(데이터타입이 object) 연산자
는 이미 시스템에서 정해진 언어기 때문에 변수명으로 지정할 수 없다.
```