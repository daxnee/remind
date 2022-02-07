### 보호소에서 중성화한 동물

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

        - 논리 연산자 :  and , or
         *and가 먼저 실행되니까 
         or 실행을 먼저 하려면 괄호를 써줘야 됨!!
         실행순서 and -> or


### 헤비 유저가 소유한 장소
    - 둘 이상 등록한 사람을 헤비유저
    - 헤비유저가 등록한 공간 정보 조회 
    - 아이디 순으로 조회
    - ID는 기본키입니다.
    ***키포인트 : 서비스에서 공간을 둘 이상 등록한 사람
    
    *ID는 겹칠수가 없고 HOST_ID는 겹칠 수 있음 = > 기본키 
    1. HOST_ID가 2개 이상인 사람 조회 쿼리
    

    내가 푼거
    -- 코드를 입력하세요
    SELECT 
      p.id,
      p.NAME,
      p.HOST_ID
      
    FROM 
    (
    SELECT
        id,
        name,
        host_id
 
    FROM PLACES
        group by host_id 
        having count(HOST_ID) >=2
          )as p
        order by 1


    선생님 답안
    select
    p.id,
    p.name,
    r.host_id
    from(
    SELECT 
    host_id,
    count(*) as cnt
        from PLACES
    group by HOST_ID
    having count(*) >=2
    ) as r   
    inner join PLACES as p
    ON r.HOST_ID = p.HOST_ID
    ORDER BY 1



       