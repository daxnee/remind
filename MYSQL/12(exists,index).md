## 220222

### EXISTS
 ``` sql   
    WHERE EXISTS (
    ename
    )
    FROM emp
    WHERE EXISTS(
        SELECT     == EXISTS 조건절에 오는 SELECT 구문은 중요하지 않다 1을 입력하던 ename을 입력하던 결과는 메인쿼리의 ename으로 나옴!!
        FROM emp
        WHERE empno = 7876
    )



    UPDATE emp
    SET sal = 3000
    WHERE EXISTS
    (
        SELECT * FROM emp WHERE job = 'manager' 
    )


    ex) 카카오뱅크
        해당 날짜의 입출금내역을 백업하기

    UPDATE 백업실행
    SET 백업날짜 = '220222'
    WHERE EXISTS
    (
    SELECT FROM 입출금내역 
    )

```    
### 모델링(정규화)

    테이블 이름: EMP
    empno, ename, dname, loc
    -------------------------
    100,  홍길동, 개발팀, 대전 (INSERT했다고 가정) 
    NULL, NULL , 기획팀, 대전 (기획팀이라는 신생팀이 생겼다고 가정. 입사한 사원들이 없으니 여러 컬럼들에 NULL값이 많이 올 것이다)

    => 테이블에 NULL 데이터가 많으면 정규화(모델링) 고려 대상


### INDEX / PK/ FK

    INDEX(목차)
    : 데이터가 많아질 수록 데이터를 조회하는 속도가 느려짐
    그러니 INDEX를 참고해야함

    1. PRIMARY KEY(PK)
    1) 중복 불가능
    2) 자동으로 INDEX가 붙음 
    => 데이터가 많을시 PK로 조회하면 데이터 찾는 속도가 빨라짐

    2. FOREIGN KEY(FK)
    1) 중복 허용 
        중복 허용 X 하려면 -> unique key 설정해주면 됨
        
    
    3. UNIQUE KEY(중복불가능 설정)
    
        unique key 문법(2가지)
        1번째 방법
        : CREATE TABLE emp(
            deptno int,
            UNIQUE KEY emp (deptno)
        )

        2번째 방법
        CREATE TABLE emp(
            deptno int UNIQUE KEY 
        )


    2. 인덱스 없음 : index를 생성해야 함
        문법 
        : CREATE INDEX <인덱스명>
        ON <테이블명> (컬럼명1, 컬럼명2);


## 모델링 실습

### 데이터 모델링 프로그램 설치 
    1. ERwin 7.3.zip 알집 풀기
    2. setup 파일 속  CAEDM73_b1666.exe설치
    3. username 아래 칸에 DW으로 이름 설정 
        나오는 next, install 계속 클릭
    4. ER 검색하면 나오는 ERwin Data Modeller 프로그램 작업표시줄에 고정
    5. 'ALLFutsion ~ 어쩌고 ~ r7' 클릭 
    6. 하단에 활성화된 번호 입력창에 제품키 입력(ERwin 7.3.key.txt에서 복붙) -  add 

    1.  파일 - new - logical (모델링만 그리고 싶어) / physical(모델링한게 바로 create)

    2. model - model properties - notation - IE - OK


### 모델링할 테이블 생성
    <테이블 생성>
    1. 가운데 상단 Entity 클릭 - 흰색 바탕 클릭 
    2. 박스(테이블) 생성 - 박스 더블클릭 
    3. Entity 이름 변경 
    4. 박스 누르고 tab키 누르면서 컬럼 추가

    Entity = 테이블
    attribute name  = 컬럼


    <관계설정>
    1. 상단의 점선 삼지창 클릭
    2. 부서테이블 클릭 -> 사원테이블 클릭 

    점선 삼지창
    : FK 설정

    실선 삼지창 
    : UNIQUE KEY 설정

### 테이블 관계 설명

- ### 1:1 (일대일 관계, 1 to 1)
 ```   
    - 선수 한명당 한 팀만 올 수 있다
    - 한 사람당 주민번호 하나
    - 군인 한명당 총 하나 
```

- ### 1 : n 관계(일대다 관계, 1 to n)
```
    - 한 선수가 여러 팀에서 뛸 수 있다면? 
    - 한 부서 안에 여러 사람이 올 수 있다면?
        fk가 중복이 가능하다
```    
- ###  n : n 관계(다대다 관계, Many to Many)    
```   
    쇼핑몰에서 회원 테이블, 상품 테이블, 구매테이블
    3개가 오는 경우
    구매 테이블은 회원, 상품이 있어야 생성이 가능하다.(누가 뭘 구매했는지 있어야 하니까!) 
    즉, 구매테이블이 다대다테이블이다.

    - 셰프 + 재료 = 음식
    - 선수 + 팀 = 대회
    - 
```
