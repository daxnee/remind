### 220316

### 복습
padding은 auto 안됨
a태그 text-aline : center 안됨
div태그로 묶어주거나 


### =, ==, ===
```
A == B : A는 B와 같다.
A === B : A와 B는 같고 자료형도 같다.
var a1 = 1;
var a1 = 1; 
a == a1 // true
a === a1 // false


= : 대입 연산자
== : 데이터 타입만 같은지 확인
=== : 문자 + 데이터 타입이 같은지 확인

```


### 왜 vanilla js에서 Jquery로 넘어갔을까?
```
기능적인 한계
2008년 ~ 2017 or 2018년까지는 Jquery 시대! (압도적으로)
2018년 이후에는 React, Vue, Angular 이 등장함

= 지금은 Jquery or React 를 사용
```


### vanilla js 사용 해보기

1. function(함수)을 만들어 기능을 추가하기 (style.display = "none";)

2. 만들어 놓은 html div 태그에 id를 주기 (popupclose)
```js
function closePopup(){
            document.getElementById('popupclose').style.display = "none";
        }
// closePopup()이라는 함수에 popupclose가 안 보이는 기능을 추가한거라고 보면 됨!

```
3. closePopup() 함수가 실행할 수 있게 onclick="closePopup()" 을 해당 div 태그에 넣어준다.
결과 : 함수를 넣어준 div를 클릭하면 id= "popupclose"가 있는 div는 보이지 none이 됨.

 

### vanilla js 사용 해보기(if문)
1. if문이 실행될 함수 만들기 (function openPopup())

2. 만들어 놓은 html div 태그에 id를 주기 (id="popupclose")

3. 변수 지정 ( var style = document.getElementById('popupclose').style.display = "none";) 
<!--id="popupclose" 의 display가 none임을 변수 style에 넣어줌 -->
4. if문 작성
```js
function openPopup(){
            var style = document.getElementById('popupclose').style.display = "none";
                if(style == "none") {
                    document.getElementById('popupclose').style.display = "block";
                    return 1;
                }
        }
5. 만든 함수 해당 div 태그에 onclick으로 넣어줌

// 만약 style이 none이면 id="popupclose" 의 div를 block(보여줘)
// 결과 : 화면에 id="popupclose"(div.popup)이 없으면 버튼 클릭시 div.popup을 보여준다.
```  

### Jquery 설치
```
구글에 'Jquery' 검색 - CDN -  minified -  script 복사 - html에 복붙

```

### Jquery Best 장점
```
1. 비동기 통신지원
2. 같은 동작을 짧은 코드로 구현
3. 구버전 브라우저 지원
```

### Jqeury 사용해보기

1. function(함수)을 만들어 기능을 추가하기 ($("#popup").hide();)
2. 만들어 놓은 html 태그에 id를 주기 (id를 popup으로 줬다면             $("#popup")으로 함수 안에 들어감! )
```js
 function closePopup(){
            $("#popup").hide();
            $(".container").append('<button onclick="openPopup()">취소</button>')
            // 버튼 클릭하면 popup 숨기고, container에 버튼박스를 추가해
            // * 버튼박스는 html의 div 태그 그대로 복붙해서 넣어주면 된다.
```
3. closePopup() 함수가 실행할 수 있게 onclick="closePopup()" 을 해당 div 태그에 넣어준다.

결과 : 함수를 넣어준 div를 클릭하면 id = popup 숨기고 '취소' 버튼 박스가 생성된다.

