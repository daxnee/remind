## 220212

### select는 내가 임의로 지정한 데이터도 조회가 가능하다
    select 10 해도 의미 없는 데이터가 나온다.
    select now 
    하면 지금 시간 나옴 


### union
    union / union all (실무에선 잘 x)
    select 8
    쿼리와 쿼리를 합쳐  n개 이상의 쿼리문을 보여줌
    쿼리를 한번더 실행하고 싶다면  union 으로 실행


    date_format(DATETIME,'%H')
    from ANIMAL_OUTS
    group by date_format(DATETIME,'%H')
    order by 1
    
    union으로 기존에 없던 테이블을 새로 생성한다고 생각하자!

### between 

    where조건을 between 으로 준다.
    select 
    *
    from emp
    where sal 
    between 1000 and 3000



### join 개수 문제
    테이블 조인시 최소 몇 개의 join 조건? 유형의 문제는 'n-1' 하면 됨.
    ex) 5개의 테이블을 조인시 최소 필요한 join의 개수는?
    답 : 4개 (5-1)

### 테이블 모델링 = 정규화


