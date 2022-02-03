### 220203

## DML : 데이터 조작 언어
    SELECT, DELETE, UPDATE, INSERT

## SQL 기본 서식
    SELECT 컬럼들, (목록)
    FROM 테이블 이름 (목록의 데이터들)
    WHERE 필터링 조건
    (>, =, <, like)
    GROUP BY (데이터를 그룹화 할때)
    HAVING (그룹핑 된 데이터에서 집계함수(sum, avg, min, max) 사용할 때)
    ORDER BY (정렬, asc, desc)
    LIMIT (데이터 row 강제로 자를 때)

    테이블 : 실제 데이터를 저장하는 공간 ex) emp
    테이터베이스 : 실제 테이블을 저장하는 공간

    ***데이터베이스 -> 테이블 -> 데이터


    순서 : from -> where-> group by -> having -> select ->order by ->limit(MySQL에만 있어서 순서 제외)


## 프로그래머스 SQL 문제풀기
    모든 레코드(==컬럼) 조회하기

### SQL formatter => 포맷 참고
    명령문들은 => 대문자!
    컬럼이름은 => 소문자!


### 아픈 동물 찾기 
```sql 
   SELECT
        ANIMAL_ID,
        NAME
    FROM ANIMAL_INS
    WHERE 
        INTAKE_CONDITION = "Sick"
    ORDER BY ANIMAL_ID
```
    tip! 실무시, SELECT와 WHERE는 위 형식처럼 사용한다(참고)


### 여러 기준으로 정렬하기 
```sql 
    SELECT
        ANIMAL_ID,
        NAME,
        DATETIME
    FROM ANIMAL_INS
    ORDER BY name,
    datetime DESC
```
    tip! order by 사용시 여러개 컬럼을 사용하려면 
    ,(콤마)로 구분해준다.


### 어린 동물 찾기
```sql
    SELECT
        ANIMAL_ID,
        NAME
    FROM ANIMAL_INS
    WHERE 
        INTAKE_CONDITION != "Aged"
```

### 상위 n개 레코드
    동물보호소에 가장 먼저 들어온(datetime)
    동물의 이름(name)을 조회

```sql   
    SELECT
        NAME
    FROM ANIMAL_INS
    ORDER BY datetime ASC
    LIMIT 1
```
    => LIMIT 1 : datetime을 오름차순으로 정렬해서 1번째 데이터만 보이게 한다
        

### 역순 정렬하기
```sql
    SELECT
        NAME,
        DATETIME
    FROM ANIMAL_INS
    ORDER BY ANIMAL_ID DESC
```

### 이름이 있는 동물의 아이디
```sql 
    SELECT
        ANIMAL_ID
    FROM ANIMAL_INS
    WHERE 
        NAME IS NOT NULL
    ORDER BY ANIMAL_ID
```

### 동물의 아이디와 이름
```sql
    SELECT
        ANIMAL_ID,
        NAME
    FROM ANIMAL_INS
    ORDER BY ANIMAL_ID
```