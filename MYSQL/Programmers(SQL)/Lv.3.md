### 없어진 기록 찾기

- 입양을 간 보호소에 기록이 없는 
- 동물의 id와 이름을 조회
- id순으로 조회하기
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

