### 없어진 기록 찾기

   
- 입양을 간 기록o 보호소엔 기록이 x
- 동물의 id와 이름을 조회
- id순으로 조회하기

      JOIN문제 풀때
       1.  교집합 컬럼 확인
       2. ANIMAL_OUTS에는 있음
       3. ANIMAL_ID에는 없음
       4. 아하 outer join을 사용해야 하는 구나

```sql
    SELECT 
        d.ANIMAL_ID, 
        d.NAME 
    FROM 
        ANIMAL_OUTS AS d 
        LEFT JOIN ANIMAL_INS AS e ON d.ANIMAL_ID = e.ANIMAL_ID 
    WHERE 
        e.DATETIME IS NULL 
    ORDER BY 
        1
```


### 오랜 기간 보호한 동물(1)
```sql
    SELECT 
        i.NAME, 
        i.DATETIME 
    FROM 
        ANIMAL_INS AS i 
    LEFT JOIN ANIMAL_OUTS AS o ON i.ANIMAL_ID = o.ANIMAL_ID 
    WHERE 
        o.DATETIME IS NULL 
    ORDER BY 
        i.datetime 
    LIMIT 
    3
```

### 있었는데요 없었습니다
```sql
    SELECT
        i.ANIMAL_ID,
        i.NAME
    FROM 
        ANIMAL_INS AS i 
        LEFT JOIN ANIMAL_OUTS AS o ON i.ANIMAL_ID = o.ANIMAL_ID
    WHERE 
        i.DATETIME > o.DATETIME
    ORDER BY 
        i.DATETIME
```

### 헤비 유저가 소유한 장소
```sql    
    select
    p.id,
    p.name,
    r.host_id
    from (
    select 
        HOST_ID
        from PLACES
        group by HOST_ID
        having count(*) >= 2
    ) as r
    inner join PLACES as p
    on r.HOST_ID = p.HOST_ID
    order by 1

    from으로 해비유저(2개 이상 공간 보유) 조건 설정 후 
    PLACES  테이블과 inner join해줘서 결과를 출력하기
    아이디 순으로 조회할 땐 'places의 id'라는 것을 주의
    
```



질문 : inner조인이기 때문에 selec절에(63번)호스트아이디를 출력할 때 p, r 둘 중 하나 지정해도 상관 없는지?