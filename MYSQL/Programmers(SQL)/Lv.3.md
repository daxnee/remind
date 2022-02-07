### 없어진 기록 찾기

-- 코드를 입력하세요
-- 입양을 간 기록o 보호소엔 기록이 x
-- 동물의 id와 이름을 조회
-- id순으로 조회하기

    **JOIN문제다?
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

