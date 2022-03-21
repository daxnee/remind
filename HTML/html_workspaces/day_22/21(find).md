### 220318

### append / appendTo

```
appendTo 자식 옆 태그를 이동시켜줌(구글링 해보기)

```

### children / find
```

둘이 한쌍 
find는 손자를 찾아줌(족보)


```

### find() 손자 태그까지 찾아주는 메서드(하위 요소 중 특정 요소를 찾는다)
```
        <div class="row"> 조부모
            <div class="item"> 부모
                <div class="baby"></div> 자식
            </div>

            조부모 부모 손자 관계가 형성

ex) 
             var baby = $('.row').find(".baby")
             row 부모태그의 자식 baby의 정보를 찾아줌


```

### children() 함수엔 리턴값이 있어서 변수에 대입이 가능하다!
```
var val =  $('.item').children();
val에 대입 가능

```


### min : 공백없이 압축된 파일임
```
min.js : 도메인 주소가 이렇게 돼 있으면 압축된거구나 생각하면 됨.
````


```
### 회원가입시 악의적으로 스페이스바를 눌렀다면?
```
공백 제거 해주면 됨
 방법1. var userId = $('#userId').val().trim();
 방법2. userId.trim();
```


### 내장함수
: 정의하지 않았는데 사용할 수 있는 함수
java에서 사용되는 문자열 함수(trim ,substr ...)가 다운로드 없어도 js에서도 사용이 가능하다 => 내장 함수

"라이츄".trim(); = userId.trim(); 같은 것임
문자 자체가 함수를 가지고 있는 것임.


### js메소드체이닝 (구글링!) ★★★
```
: 객체를 return 하게 되면 메소드의 반환 값인 객체를 통해 또 다른 함수를 호출할 수 있다.

ex)
var userId = $('#userId').val().trim();
userId의 -> val() 함수를 -> trim() 공백 제거한 후
userId로 return 해주겠다. 

$('#userId').val(); = "라이츄".trim(); (같은 거라고 볼 수 있음)

String(n).split('').sort().reverse() => 이런식으로 체이닝한다.
```

### 정규표현식(Reguler Expression)
: 문자열을 처리하는 방법
원하는 문자를 체크할 수 있는 기능임.
 ex ) 영어만, 한글만, 숫자만...

```js
        var userName = $('#userName').val().trim();
        if(checkName(userName)){
          console.log("한글 이름입니다!");
        }else{
          console.log("한글 이름을 입력해주세요!");
        }

      }

      // 정규표현식 함수
      function checkName(name){
        var regex = /^[가-힣]+$/; //정규표현식 (한글이름만 찾기)
        // 가 부터 힣 까지 
        // 구글에 있으니까 서치하면서 사용하면 됨 ex) 이메일 정규표현식, 핸드폰 정규표현식 ..
        return regex.test(name);// 정규표현식 체크
        // test : 문자열 내장 함수임 
      }

    // function checkName() 으로 정의한 정규표현식 함수가 
    // return 값을 갖고 있으니까 
    // 위 메소드로 호출 할 수 있는 것임! if(checkName(userName))

        
    }

```