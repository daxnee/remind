## 고양이와 개는 몇 마리 있을까?
```sql
        SELECT
        ANIMAL_TYPE,
        COUNT(ANIMAL_TYPE)
    FROM 
    ANIMAL_INS
    GROUP BY ANIMAL_TYPE
    ORDER BY ANIMAL_TYPE 
```



## 루시와 엘라 찾기
    SELECT 
        ANIMAL_ID, 
        NAME, 
        SEX_UPON_INTAKE 
    FROM 
    ANIMAL_INS 
    WHERE 
    (
        NAME like 'l%' 
        or NAME like '%r%' 
        or NAME = "Mitty"
    ) 
    order by 
    ANIMAL_ID  => 혹시 이 답은 안되나...?




    SELECT 
        ANIMAL_ID, 
        NAME, 
        SEX_UPON_INTAKE 
    FROM 
        ANIMAL_INS 
    WHERE 
    (
        NAME like 'l%' 
        or NAME like '%r%' 
        or NAME = "Mitty"
    ) 
    order by 
    1



## 중복 제거하기
동물의 이름은 몇 개인지 조회하는 SQL 문을 작성해주세요. 이때 이름이 NULL인 경우는 집계하지 않으며 중복되는 이름은 하나로 칩니다.
    SELECT
        COUNT(distinct(NAME))
    FROM ANIMAL_INS
    WHERE NAME IS NOT NULL

    GROUP BY는 집계함수와 함께 조회할때,


## 중성화 여부 확인하기
    IF(조건식, 'O', 'X') 
    조건식이 맞다면 가운데 o 실행(true), 틀리면 x실행(false) 
     자바에선 SUBSTRING 0부터 시작
     MySQL에선 1부터 시작
    SUBSTRING(컬럼, 1,2) => ap
     
    *where 사용시 여러 조건이 오면서 or을 여러번 쓸때(조건이 3개 이상 될때)
    => where in('김철수', '홍길동', '아이유')  
    

    모든 프로그래밍 언어에는 문자열 함수가 존재
    DB : MySQL, 오라클
    JS, JAVA, PYTHON
    




