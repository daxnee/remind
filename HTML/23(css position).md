### 220208
    직종구분
    - SI (외주(비추), 플랫폼사업)
    플랫폼 사업 : 자회사가 많은 곳

    - SM (System management)
    기존시스템이 구축돼있음 비교적 근무가 편함.

### required / disabled
    required : 무조건 입력해야 함
    disabled : 서버에 전송 안됨



### 기술면접*** 웹서버에 전송하는 방법이 2가지

    1. get (public)
       (http header에 전송)

    2. post (private) - 보안이 필요한 정보들 ex) 회원정보, 이메일, 주민번호
       (http body에 전송)


       JAVA로 예를 들면 
       http클래스 안에 get, post 메소드가 있는 거라고 생각하기
    
    ex)
       <form action="서버 주소" method="post">
        서버 주소를 post방법으로 전송해줘


### position 복습 
    - 디폴트값 static :돌
    - relative : 돌 -> 다리가 생김
    조건 : 원래 자기 자리에서 움직임
### relative
### fixed
    - fixed : 고정된 위치
        ex. 카카오톡 상담 아이콘 (스크롤을 내려도 따라오는)


### absolute
    - absolute : 자기 마음대로 행동함
    (조직생활 하지 못해서, 개인주의 성향)
         
    absolute는 범위 침범이 가능함 
    반면, relative는 범위를 침범하지 않음 

    ex)
    <div class="mom"> 부모
    <div class="sun">자식</div>

    만약 부모태그가 있다면 부모 태그 기준으로 움직임
    조건: 부모가 relative일때만 적용 가능

    ex)
     .mom {
            position: relative;
            background-color: darkred;
            width: 100px;
            
            height:100px ;
        }

    .sun{
            position: absolute;
            background-color: black;
            width: 100%;
            height:100px ;
        }

        => sun은 mom태그에 붙어서 이동함


### CSS 
    1. position (static, fixed, absolute, relative)
    2. margin, padding, border-box
    3. flex (암기필수)


### 컬러 코드 사이트
    https://htmlcolorcodes.com/