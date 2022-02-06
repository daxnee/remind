### 없어진 기록 찾기

    -- 입양을 간 보호소에 기록이 없는 
    -- 동물의 id와 이름을 조회
    -- id순으로 조회하기

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