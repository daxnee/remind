### 220203
## HTML 시작
    HTML + SQL 같이 병행

## HTML 직종
    1. 웹디자이너
    2. 프로그래머(프론트 or 백엔드)
    3. 블로거
    4. 웹기획자
    5. 쇼핑몰 운영자

## ***HTML 특징
    1. 논리적이고 연산적인 요소가 필요 없다.
    2. 컴파일(이클립스에서 ctrl + F11) 작업이 필요없다.
        (컴파일? => 컴퓨터는 010101밖에 몰라서 컴파일 작업이 필요)
    3. 브라우저마다 보이는게 살짝 다름

## HTML(언어 종류 중 하나)
    (Hyper Text Markup Language)
    https://www.naver.com

## html 만들기 
    바탕화면에 폴더 만들고
    vscode로 열기
    vscode에 파일 만들고, 파일 확장명을 .html로 설정
    ! 입력 후 tab => html 서식 생성
    
    태그는 쌍으로 이루어짐
    / = > '태그가 끝났다' 라는 의미

## vscode 설치 목록
    테트리스 모양 클릭 
    1. live server 
    2. material icon theme (확장명마다 아이콘을 바꿔줌)
    3. prettier ***(필수)
       prettier? : 개발회사 입사를 했다고 가정,
        -> JAVA보다 JS(자바스크립트)를 더 많이 쓴다면? 
        1) 개인마다 코드 스타일 다름 
        2) 누구는 세미콜론 찍고, 누구는 안찍고
        3) 글자 수 제한

        ∴ 즉, 입력하면 최소한의 코드 스타일을 맞춰줌 
            ex) 세미콜론 안찍으면 자동으로 찍어줌

## 코드 정렬
    파일 두개 내 워크스페이스 안 day_01 파일 안에 복붙하기 (vscode, prettier)
    *prettier 설치시 주의점
        day_01 파일 밖으로 빼줘야 함 (tab키 작동 안됨)


## HTML 이론**
    주석 : ctrl + / 

    기본세팅
    <html>

        <head>  머
        </head> 리

        <body>  모
        </body> ㅁ   

    </html>  ex) /는 java 중괄호 닫혔다고 생각
    
   기본 문법 
   <html> 태그 안에 head와 body가 존재
   그 안에 내용들을 설정하고 꾸며주는 것임

   head tag : 
        1. 웹사이트 제목(탭페이지에 있는 사이트 이름)을 쓸 수 있음.
        2. 메타 데이터를 작성할 수 있음.
        **메타란? '어떤 목적'을 가지고 만들어진 데이터
         인스타그램의 '해시태그'라고 볼 수 있음
         내가 설정한 메타태그로 사이트 검색시 데이터를 선별해줌
        
        ex)
         <meta name = "keywords"
         content = "대전,술집,추천,대전술집,술집맛집"/>

         <meta name = "autor" content="현상원"/>


    body tag : 여기서 웹페이지 제작을 함.

## 코드 수정시
    우측 하단 Go live 클릭 = > 내가 수정한 코드가 실시간으로 변경됨 

## 자주 사용하는 태그**** (암기 필수)
### h 태그 
    대,중,소제목 쓸 때
    h1~6 까지 있음 (보통 4까지 사용)
    h 뒤에 있는 숫자가 커질 수록 폰트 크기가 작아짐

### a 태그 : 링크 태그 (다른 주소 이동할 때 사용)
    
    *** input 태그 : 뭔가를 작성할 때 주로 사용
        input안에 설정하는 것들이 많음  = > '속성' 이라고 부름
        <input type="text" /> 
         보통 태그는 쌍으로 이루어지지만 input은 역슬래쉬 하나만 끝에 
         입력하면 됨. (보통 실무에서 이렇게 사용)
        
        ex) 회원가입 창 만들기
        아이디 : <input type="text"/> 
        비밀번호 : <input type="password"/> 
        
        입력창에 글자를 넣고 싶으면? p입력 후 pleaceholder 사용
        <input type="text" placeholder="아이디 입력"/> 

    
    
##  웹 서버와 디비 서버
    서버(server) : 서비스를 제공하는 주체
    
    입력된 데이터가 DB로 가는 과정?
    HTML -> 웹 서버 - > DB 서버(My SQL)
    *왜? HTML에서 바로 데이터베이스로 저장 불가능하니까 웹서버를 거침


## input 특징 더 알아보기
     
    <input type="text" id="userId" name="userId" value=""/>
        id : 변수 이름(중복 불가능)
        name : 변수 이름(중복 가능)

        value와 placeholder 차이점?
        value : value에 넣은 글자가 지워지지 않고 같이 입력
        placeholder : 타이핑 즉시 글자가 없어짐

        readonly : 타이핑(입력) 불가능

    input type은 한가지 종류만 올 수 있고,
    속성(id, name, readonly...)은 중복이 가능하다.


## SQL 포맷 교정 사이트
https://codebeautify.org/sqlformatter