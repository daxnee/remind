### 아픈 동물 찾기 
    SELECT
        ANIMAL_ID,
        NAME
    FROM ANIMAL_INS
    WHERE 
        INTAKE_CONDITION = "Sick"
    ORDER BY ANIMAL_ID

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
```sql   
        SELECT
        NAME
    FROM ANIMAL_INS
    ORDER BY datetime ASC
    LIMIT 1
```
    => LIMIT 1 : datetime을 오름차순으로 정렬해서 1번째만 보이게 한다
        

### 역순 정렬하기
```sql
    SELECT
        NAME,
        DATETIME
    FROM ANIMAL_INS
    ORDER BY ANIMAL_ID desc
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