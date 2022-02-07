## JOIN 복습
### 교집합 조인(INNER JOIN)
    교집합 데이터를 연결
    2개 이상의 (A 테이블과 B테이블) 데이터를 조회할 때

    emp 와 dept 는 deptno 테이블이 겹친다.
    =>
    SELECT
        e.ename
    FROM emp AS e
    INNER JOIN dept AS d
    ON e.deptno = d.deptno

### 차집합 조인(OUTER JOIN)
    구매 내역이 없는 회원을 조회
    ex ) emp 에 없는 deptno까지 조회하시오

    select 
    *
    from emp as e
    right join dept as d
    on e.DEPTNO = d.deptno

    40번 부서인 사람까지 나왔음

    여기서, 40번만 추출하고 싶다면?   ***다시 정리
       select 
    *
    from emp as e
    right join dept as d
    on e.DEPTNO = d.deptno
    where e.EMPNO is null

### 서브쿼리 
    서브쿼리란? 쿼리에 또 쿼리가 옴
    
    괄호 안은 참고만 하기!
    1. SELECT 절에 오는 서브 쿼리(스칼라 서브쿼리)
    2. WHERE 절에 오는 서브 쿼리 (중첩 서브쿼리)
    3. FROM 절에 오는 서브 쿼리(인라인 뷰)

    *** 서브쿼리 사용이 가능한 구간 (1,2,3 多)
    서브쿼리를 쓰기 전에  "정말 필요한가,,,?" 한번 더 생각하기!
    서브쿼리 사용 조건 :  교집합 데이터(컬럼)이 없음 => inner, outer join 불가!

#### 1. SELECT 서브쿼리(스칼라 서브쿼리) (극한의 상황에 사용함, 테이블이 엉망일때)
        언제? 서브쿼리 사용 조건 :  교집합 데이터(컬럼)이 없음 => inner, outer join 불가!        
        
            감기 테이블 (감기 관련)
            코로나 테이블 (코로나 확진자 관련)
            오미크론 테이블 (오미크론 확진자 관련)

        

        ex) SELECT
                COUNT(*),
                (SELECT COUNT(*) FROM 코로나) AS 코로나 확진,
                (SELECT COUNT(*) FROM 오미크론) AS 오미크론 확진,
            FROM 감기
        - 실행순서 : 서브쿼리가 먼저 실행된 후 외부쿼리 실행



#### 2.FROM 서브쿼리 (인라인 뷰)
    언제? 데이터를 먼저 필터링 해야할 때 사용
    
    ex) emp 테이블에 (급여가 3000 미만인 사람 데이터)로 뭔가를 활용할 때
    SELECT 
        e.ename,
        e.job
        FROM 
        (
        SELECT
            ename,
            job
        FROM emp
        WHERE sal < 3000 
        ) as e
        
        - as e? 
        from 서브 쿼리문들을 e라고 칭해준것임
        form as e 안의 데이터들을 조회하려면
        select에 e.ename으로 검색해야 됨!

        - 실행순서 : 서브쿼리가 먼저 실행된 후 외부쿼리 실행

    3. WHERE

    ---

    4. HAVING
    5. ORDER BY
    6. INSERT
    7. UPDATE set


#### where 서브쿼리
    - 단일행 : = 사용
    ex) 회사에서 가장 급여를 많이 받는 사람을 추출
    SELECT
        ename,
        sal
    FROM emp
    WHERE
            sal = (
        SELECT
            MAX(sal)
        FROM emp
        );
    

    - 다중행 : in 사용
    in 사용
     ex) 
    SELECT
        ename,
        sal
    FROM emp
    where
            ename IN (
            SELECT
                ename
            FROM EMP
            WHERE
                sal > 2000
            );

            
    *** in 사용 비추 이유 : 실제로 존재하는 데이터의 값을 비교한다 => 즉, 속도가 느려지고 비용은 많이 듦
        그래서 실무에선 in 대신 from에 서브쿼리를 사용하는 것!!

        Q. 그럼 언제 where 서브쿼리는 언제 어떻게 쓸까?
        A. EXISTS를 사용한다~!

        select * from emp 
        where EXISTS(   
            SELECT ename FROM KT_핸드폰
            emp WHERE KT > 3000   // where의 조건이 true면 밖의 select문 실행 false면 실행 안 함
        )

