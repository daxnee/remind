## 220215

### 1. DDL/DML/DCL/TCL
    - DDL (SELECT UPDATE DELETE INSERT)  => 커밋포함(오토커밋)
    - DML (CREATE DROP ALTER) => 커밋 미포함
    - DCL (GRANT REVOKE)
    - TCL (COMMIT ROLLBACK) 
     

    - DCL (GRANT REVOKE)
    GRANT : 권한부여
    REVOKE : 권한회수

    ex) 홍길동이 DB접속 INSERT 5번 날리고 COMMIT
    길동이가 실수로 DELETE
    그러면 ROLLBACK을 이용해서 최신 COMMIT 상태로 돌아감

    

### 2. '관계형 데이터베이스'와 '비관계형 데이터베이스'
    -관계형 데이터베이스(R(관계)DBMS)
        : 신뢰할만한 데이터를 안전하게 저장할 수 있는 구조
        
        1) join이 있다.

        2) 부모테이블과 자식테이블이 존재
        ex) emp테이블에 deptno 컬럼이 있음
        deptno컬럼은 dept테이블에서 갖고와야 
        emp테이블에 조회가 가능하니까!

        emp(자식)는 dept(부모)를 참고하고 있음
        *참조를 받으면 부모

        화살표를 쏘는 쏘는게 자식
        화살표를 받는 쪽이 부모

        *누구를 참조하지 않는 테이블 : 원시테이블

    -비관계형 데이터베이스(NoSQL) (Dynamodb, MongoDB)
        : 분석이 목적임(데이터면 일단은 저장)

        1) join이 없다.(비관계형이니까. 오로지 select!) 

### 3.CREATE (테이블 생성)
```sql    
    CREATE TABLE emp
    (
        empno int(11),
        ename varchar(20),
        deptno int(5),
        foreign key (deptno) references dept(deptno)
    )
        -- emp의 deptno와 dept의 deptno를 관계를 맺겠다
        -- 첫번째 괄호 : (emp중에 컬럼 한개) , 두번째 괄호 : (dept중에 컬럼 한개)
        -- 참조키(외래키)는 컬럼이름이 중요한게 아니라, 데이터 타입이 같아야 한다.(편의상 두 테이블의 컬럼명을 같게 해준것임)
        -- 조건 : 고유한 데이터를 가진 컬럼을 참조해야한다.
```  

### 4.기본키는 몇 개의 조건들이 따른다.(sqld 시험출제★★★) 
### step1. on delete / on update (sql 빈출문제★)
    - on delete : 부모 데이터에 삭제 이벤트가 발생하면 자식 데이터에 이벤트 발생 

    - on update : 부모 데이터에 수정 이벤트가 발생하면 자식 데이터에 이벤트 발생


### step2. 5가지 이벤트 종류 택 1 (sql 빈출문제★)

     아래중 하나를 선택
     
    1. cascade : 자식데이터 삭제 or 수정 
                행 자체가 없어짐
                
    2. set null : 자식데이터 null 업데이트
                행은 살아있음

    3. set default : 자식데이터 default 값으로 업데이트
                행은 살아있음

    4. defalut(restrict) : 부모 데이터 삭제 or 수정 불가능
                참조하고 있는 자식 테이블에 부모데이터를 쓰고 있으면 삭제, 수정이 불가능함

    5. NO ACTION : 부모 데이터를 삭제해도 자식 테이블의 데이터는 변경되지 않음
                   자식테이블 데이터는 그대로 남아 있음 


### 기본키 조건 사용 방법
    on delete / update + 이벤트 종류(5가지 중 택1)
    ex)
    foreign key (deptno) references dept(deptno) on delete cascade               
    => 가령 dept의 deptno 데이터 중 10번을 지우면 emp의 deptno 10번 데이터가 삭제됨


### 4. 모델링(테이블 생성)
*담당 교수가 1명이라고 가정할 때 테이블 생성하기 

    (학생테이블)                        (교수테이블)
    학생 이름                           교수이름
    학생 나이                           교수번호(기본키)
    교수번호(외래키=참조키=FK)         담당과목
    학점                                연차
    학번(기본키)
    학년

    겹치지 않는 고유한 데이터 : 기본키(PK)
    두 테이블 간 공통된 데이터 : 참조키(FK)


### 5. 참조키(FK)
    1) 참조키는 유일할 필요가 없다 => 실제로 유일하지 않은 경우가 많음

    2) 참조키의 값으로는 부모 테이블에 존재하는 키의 값만을 넣을 수 있다 => 참조 무결성

    3) 참조키를 사용하여 부모 테이블의 유일한 값을 참조한다. ( 예를들어, 부모테이블의 기본키를 참조 )

    4) 참조키의 값이 부모테이블의 기본키일 필요는 없지만 유일해야 한다.


    