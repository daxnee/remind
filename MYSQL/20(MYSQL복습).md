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

    테이블 : 실제 데이터를 저장하는 공간
    테이터베이스 : 실제 테이블을 저장하는 공간

    데이터베이스 -> 테이블 -> 데이터


    순서 : from -> where-> group by -> having -> select ->order by ->limit(MySQL에만 있어서 순서 제외)



## 프로그래머스 SQL 풀기
    모든 레코드(==컬럼) 조회하기

