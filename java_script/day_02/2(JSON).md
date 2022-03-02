### 220302

### 백엔드 언어를 왜 배울까?
```
: HTML에서 DB로 바로 전송이 불가능하기 때문에 중간과정을 거쳐야 전송이 가능!

HTML -> ( JAVA, C, PYTHON 등등 -> DB ) *(괄호 안을 server라고 칭함)

JSON (Java Script Object Notation)
: HTML -> JAVA, C, PYTHON 가는 (전송구역)과정 
: html에서 만든 형식들이(input) JSON형태로 DB에 전송되어야 함


java에서는 Json을 Map이라고 함
JSON : 데이터 형식(단순히 데이터를 표시하는 표현 방법)
```
### JSON 변수이름 지정해주는 방법>
```
1. 명사
2. 복합명사일 때 (카멜 표기법)
    int userInfomation
3. 데이터 타입이 boolean형일 때
변수이름 앞에 is + (명사) 옴

ex) isLogin (로그인 여부)
    isMeal (식사 여부)

변수가 오는 쪽이 key,
값이 오는 쪽이 value
```
### JSON은 key와 value로 구성됨
```
1. key는 중복 불가능 value는 중복 가능
2. value에 정수형(int, double), 문자형(string), boolean형, 배열형(array), null이 올 수 있다.
3. 중괄호로 감싼다.

```

### 명령어 입력시 폴더경로 설정하기
작업하려는 폴더가 다른 경로에 있다고 가정할 경우 ex) day_01 폴더에서 day_02 폴더로 

1.  현재 경로 파악하기
    : ls 
    ex) 디렉터리: C:\Users\23\Desktop\remind\java_script\day_02
        => 현재 경로 : day_02 

2. 현재 경로에서 뒤로 가기
    : .. cd 
    => 이전 경로의 파일인 java script로 위치 설정됨 

3. 경로 지정하기
    : cd day_02(폴더이름)  (cd d 까지만 입력 후 tab키 누르면 d로 시작하는 폴더명을 추천해줌)
    *cd(change directory)

4. 명령문 실행하기
    : node 파일명 (node i 까지만 입력하면 i로 시작하는 파일명 자동추천됨)



### 리눅스 명령어(주니어 개발자가 알아야 하는 필수 명령어)
```
리눅스 : 운영체제 (윈도우, OS)

ls : 현재 경로 파일 및 폴더 확인 (현재 경로에 있는 폴더)
cd : 폴더 접속
pwd : 현재 경로 (현재 내 위치가 어딘지)
clear : 작업창 청소 

*desktop : 바탕화면

cd : cd d + tab키 2-3번 누르면 = d로 시작하는 파일명들을 알려준다.
cd..: 현재 경로에서 뒤로 가기 
```

### js의 상수
```
java는 final
Java Script는 const PI= 3.14
```