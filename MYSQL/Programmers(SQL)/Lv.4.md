### 보호소에서 중성화한 동물
```sql
    SELECT 
        i.ANIMAL_ID, 
        i.ANIMAL_TYPE, 
        i.NAME 
    FROM 
        ANIMAL_INS AS i 
        LEFT JOIN ANIMAL_OUTS AS o ON i.ANIMAL_ID = o.ANIMAL_ID 
    WHERE 
        i.SEX_UPON_INTAKE LIKE "I%" 
    AND (
        o.SEX_UPON_OUTCOME LIKE "S%" 
        or o.SEX_UPON_OUTCOME LIKE "N%"
    ) 
    ORDER BY 
        1

        -- 논리 연산자 :  and , or
        --  * 'and가 먼저 실행'되니까 
        --  or 실행을 먼저 하려면 '괄호'를 써줘야 됨!!
        --  실행순서 and -> or
```

### 헤비 유저가 소유한 장소
    - 둘 이상 등록한 사람을 헤비유저
    - 헤비유저가 등록한 공간 정보 조회 
    - 아이디 순으로 조회
    - ID는 기본키입니다.
    ***키포인트 : 서비스에서 공간을 둘 이상 등록한 사람
    
    *ID는 겹칠수가 없고 HOST_ID는 겹칠 수 있음 = > join 할때 HOST_ID 
    문제 중 'ID는 기본키' 라는 말에서 알 수 있음
    1. HOST_ID가 2개 이상인 사람 조회 쿼리
    

```sql 
-- 데이터를 필터링할 때 사용
-- 헤비 유저가 소유한 장소
-- from 서브쿼리로 2개이상 host_id를 소유한 데이터 확보
-- 확보 후, 외부 쿼리로 name과 id를 조회 후 정렬
    
  
   SELECT
        p.id,
        p.name,
        r.host_id
    FROM (
          SELECT 
            host_id,
            count(*) AS cnt
        FROM PLACES
        GROUP BY host_id
        HAVING COUNT(*) >= 2
    ) AS r
    INNER JOIN PLACES as p
    ON r.HOST_ID = p.HOST_ID
    ORDER BY 1
```

### 입양시각 구하기(2)
        
```sql        
        SELECT 
        h.hour,
        IFNULL(ao.cnt,0)

    FROM (
    SELECT 0 AS hour
        UNION SELECT 1
        UNION SELECT 2
        UNION SELECT 3
        UNION SELECT 4
        UNION SELECT 5
        UNION SELECT 6
        UNION SELECT 7
        UNION SELECT 8
        UNION SELECT 9
        UNION SELECT 10
        UNION SELECT 11
        UNION SELECT 12
        UNION SELECT 13
        UNION SELECT 14
        UNION SELECT 15
        UNION SELECT 16
        UNION SELECT 17
        UNION SELECT 18
        UNION SELECT 19
        UNION SELECT 20
        UNION SELECT 21
        UNION SELECT 22
        UNION SELECT 23
    ) AS h
    LEFT JOIN (
    SELECT
            date_format(ao.DATETIME,'%H') AS ao_hour,
            COUNT(*) as cnt
        FROM ANIMAL_OUTS AS ao
        GROUP BY date_format(DATETIME,'%H')
    ) AS ao
    ON ao.ao_hour = h.hour
```      
- union 
    
    2개 이상의 쿼리를 결합할 때 사용
    union : 결합시 중복 제거
    union all : 결합시 중복 제거x

    왜 union을 사용할까? 해당 시각에 입양된 기록이 없어도(null) count 0으로 출력해야 한다.
    따라서 union으로 모든 시간을 가진 table을 생성한 후 
    기존에 있던 ANIMAL_OUTS테이블과 
    join해줘야 한다.