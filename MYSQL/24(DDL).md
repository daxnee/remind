### 220209

### DDL
    DDL (auto commit)
    1. CREATE
    2. DROP
    3. ALTER

### CREATE
    테이블 생성
     
    
    <문법예시>
    *student : 테이블 이름
    *id: 컬럼 이름

    - 기본키 설정하기: 
```sql 
        -- <문법예시>
        CREATE TABLE student(
        id INT(11) NOT NULL auto_increment,   // auto_increment : insert될때마다 해당 컬럼의 데이터가 증가됨
        name VARCHAR(20) NOT NULL,
        height INT(5),
        age INT(5) DEFAULT 0,
        create_at datetime DEFAULT CURRENT_TIMESTAMP, //CURRENT_TIMESTAMP : 현재 시각 
        -- 시간은 데이터타입이 datetime 
		constraint student_id_pk primary key(s_id)  //이름이 id인 컬럼을 고유키(PK)로 설정하겠다.
        -- student_id_pk : 테이블_기본키컬럼명_pk 
    );
```
    INT: 데이터  
    NOT NULL: 조건
    age INT(5) DEFAULT 0 : 나이에 값을 넣지 않으면 디폴트(0) 값이 넣어진다.



    auto_increment : insert될때마다 설정한 해당 컬럼의 데이터가 증가됨. 
    => 기본키를 NOT NULL,auto_increment 로 설정하고 데이터를 입력하지 않아도 기본키의 숫자가 증가됨
    
    ex)
    insert into student 
    (name)
    values('거북이')
    => 기본키인 id를 설정해주지 않았지만 숫자는 증가
                        

    CREATE로 작성한 쿼리문을 '스키마' 라고 부름
    실무시, 스키마 달라고 하면 CREATE 쿼리문을 주면 됨 


  

### drop
    테이블 지우기
     *student : 테이블 이름

    <문법예시>
    drop table student ;


