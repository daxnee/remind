
### SQL 복습 
    select

    from emp as emp 
    inner join dept as depton e.deptno = d.deptno
    inner join dw as dw
    on 
    ....
    where

    이런식으로 조인할 테이블이 3개 이상 올 수 있음 
    그러면 당연히 from이 많아질것임

---


## limit : 출력되는 결과 행의 수를 제한 (order by 뒤에 오는 마지막 순서)
    
    ex)

    select
    *
    from emp
    limit 0, 10

    => 게시판 짤때 사용


## 조인 종류
    1. INNER JOIN(내부 조인 혹인 조인)
    => 두 테이블을 조회할 때, 두 테이블에 모두 지정한 데이터 조회

    2. OUTER JOIN(외부 조인)
    두 테이블을 조회할 때, 1개의 테이블에만 데이터가 있어도 조회
    ***2. 외부 조인 종류 (OUTER)
    1. LEFT OUTER JOIN : 왼쪽 테이블의 모든 값이 출력되는 조인
    2. RIGHT OUTER JOIN: 오른쪽 테이블의 모든 값이 출력되는 조인
    3. FULL OUTER JOIN : 왼쪽 또는 오른쪽 테이블의 모든 값이 출력
    (성능이 가장 떨어지는)


 ## 문법 예시
    select 
    <컬럼 목록>
    from <첫번째 테이블 이름>
    <left or right> outer(디폴트) join <두번째 테이블 이름>
    on <조인 조건>
    where

    OUTER JOIN 언제 사용할까?
    ex) 쇼핑몰 사이트에서 회원가입은 했는데 구매이력이 없는 회원을 조회할 때

    사원테이블에서 40번 부서인 operate를 조회하라
    select 
    *
    from emp as e
    right join dept as d 
    on e.DEPTNO = d.DEPTNO


    만약 내가 dept에 있는 데이터를 조회하고 싶으면?
    : join 기준으로 조회할 테이블을 왼쪽에 쓰고 left
    반대면 join 기준으로 테이블을 오른쪽에 쓰고 right
    => 조건 : 손흥민 데이터는 emp에 있음 
    select 
    *
    from emp as e 
    left join dept as d
    on e.DEPTNO = d.DEPTNO
    where e.DEPTNO is null

    => emp를 왼쪽에 쓰고 left로 join하면됨

    *** as 명칭은 중복 안됨 ex) as e,  as ee


    손흥민 데이터는
    부서번호가 없어서 교집합 데이터가 아님!
    ex)
    손흥민 포함 전체 조회해보고 싶다.
    select 
    *
    from emp as e 
    left join dept as d
    on e.DEPTNO = d.DEPTNO


    손흥민만 찾고 싶다면?(차집합 데이터)
    select 
    *
    from emp as e 
    left join dept as d
    on e.DEPTNO = d.DEPTNO
    where e.DEPTNO is null


## inner join 코딩
    2. 내가 찾고자 하는 테이블 위치를 확인
    3. left or right를 사용할지 확인
    select
    *
    from emp as e *inner join* dept as d => inner join을 기준으로 위치 선정
    on e.deptno = d.deptno




## SELF JOIN(자체 조인)
    별도의 문법이 있는 것은 아님.
    INNER JOIN 문법 동일.
    즉, 동일 테이블을 두번 조인!(INNER JOIN으로!)
    => 자신이 자신과 조인, 1개의 테이블 사용

    ex) emp테이블 안에 있는 각자의 사원번호로 
    셀프 조인을 해서 서로의 사수, 후배를 알아보고 싶을때 사용


## 문제풀이

    1. 사원의 담당 사수와 그 사수의 사원번호를 조회
    select
    sawon.empno as "사원 번호",
    sawon.ename as "사원 이름",
    sasu.empno as "사수 번호",
    sasu.ename as "사수 이름"
    from emp as sawon
    inner join emp as sasu
    on sawon.mgr = sasu.empno

    2. 사수들의 담당 후배들을 조회
    select 
    sawon.empno as "후임 번호",
    sawon.ename as "후임 이름",
    sasu.empno as "사수 번호",
    sasu.ename as "사수 이름"
    from emp as sasu
    inner join emp as sawon
    on sasu.empno = sawon.mgr



## 다중 조인

    select 
        컬럼목록
    from <테이블 별칭a>
    <inner or right of left> join <테이블 별칭 B> 
    on <조인 조건>
    <INNER or RIGHT or LEFT> JOIN <테이블 별칭 C>
    ON <조인 조건>
    [WHERE, GRUOP BY, HAVING, ORDER BY..]

    다중 조인은 위에서부터 실행됨





## 문제

    1) 부서명이 RESEARCH인 사원의 
    이름,급여,근무 지역 출력

    select 
    e.ename as '이름',
    e.sal as '급여',
    d.loc as '근무지역'
    from emp as e
    inner join dept as d
    on e.DEPTNO = d.deptno
    where d.dname = 'research'


    2) 보너스를 받는 사원에 대해 
    이름, 업무, 급여, 부서명을 출력

    select 
    e.ename as '이름',
    e.job as '업무',
    e.sal as '급여',
    d.DNAME as '부서명'
    from emp as e
    inner join dept as d
    on e.DEPTNO = d.deptno
    where e.comm is not null


    3) 이름 첫글 A자를 가진 사원에 대해 
    이름, 업무, 부서명, 부서 위치를 출력

    select 
    e.ename as '이름',
    e.job as '업무',
    d.DNAME as '부서명',
    d.loc as '부서 위치'
    from emp as e
    inner join dept as d
    on e.DEPTNO = d.deptno
    where e.ename like  'a%'

    
    4) 사원명, 사수번호, 사수 이름을 출력 ★
    단, 사수가 없는 사원도 포함

    select 
    e.eNAME as '사원명',
    e.mgr as '사수번호'
    from emp as e 
    left join dept as d
    on e.DEPTNO = d.DEPTNO  


    5) 사원명, 사수번호, 사수 이름을 출력
    단, 사수가 없는 사원만  -> left 
    select
    ename as '사원이름',
    empno as '사원번호'
    from emp as sawon
    inner join emp as boss
    on sawon.empno = boss.mgr
    where mgr is null


    6) 상사번호가 7698인 사원의 이름, 사원번호, 상사번호, 상사명을 출력
    select
    sawon.ename as '사원이름',
    sawon.empno as '사원번호',
    boss.mgr as '상사번호',
    boss.empno as '상사이름'
    from emp as "sawon"
    inner join emp as "boss"
    on sawon.empno = boss.mgr
    where sawon.mgr = 7698


    7) 상사보다 먼저 입사한 
    -사원의 사원이름, 사원의 입사일, 상사 이름, 상사 입사일을 출력
    select
    sawon.ename as "사원 이름",
    sawon.HIREDATE as "사원 입사일",
    boss.ename as "상사 이름",
    boss.HIREDATE as "상사 입사일"
    from emp as sawon
    inner join emp as boss
    on sawon.mgr = boss.empno
    where sawon.HIREDATE < boss.hiredate



    8) 업무가 MANAGER이거나 CLERK고 
    입사날짜가 1982년에 입사한
    사원의 사원번호, 이름, 급여, 직업, 부서명을 출력
    select 
    e.empno,
    e.ENAME,
    e.sal,
    e.job,
    d.DNAME,
    e.HIREDATE
    from emp as e
    join dept as d 
    on e.DEPTNO = d.DEPTNO 
    where 
    (
    e.job = 'manager'
    or e.job = 'clerk'
    )
    and e.HIREDATE >= '1982-01-01'
    and e.HIREDATE <= '1982-12-31'

    또는 and date_format(e.HIREDATE ,'%Y') = '1982'
    이렇게도 가능 



    9) 부서별 급여 총합을 구하시오. 
    단, 사원이 존재하지 않는 부서도 포함해서 
    급여 순으로 내림차순 하시오.
    select 
    d.DNAME,
    sum(e.sal)
    from emp as e 
    left join dept as d
    on e.DEPTNO = d.DEPTNO  
    group by e.deptno
    order by sal desc

---

    *** 아래 난이도 상 문제 ***
    10)  사원 이름, 사원의 부서명, 상사 이름, 상사의 근무지역을 출력. 
        단, 사원이 존재하지 않는 부서번호와 부서명도 출력.

    *상사의 근무지역까지 출력*
    select 
    e.ename as '사원명',
    d.DNAME as '부서명',
    boss.ENAME as '상사이름',
    d.LOC as '근무지역',
    d2.LOC as '보스의 근무지역'
    from emp as e
    right join dept as d
    on e.DEPTNO = d.DEPTNO
    left join emp as boss 
    on e.MGR = boss.EMPNO
    left join dept as d2
    on boss.DEPTNO = d2.DEPTNO 



    11) 부서 위치가 CHICAGO이고 사수 급여가 5000 미만인 
    사원 번호,사원 이름,사수 번호, 사수 이름, 사수 급여, 부서명을 출력
    단, 사원의 입사날짜로 오름차순. (아래 답 참고) ★

    select sawon.EMPNO as "사원 번호" ,
    sawon.ENAME as "사원 이름" , sasu.EMPNO as "사수 번호" ,
    sasu.ENAME as "사수 이름" , sasu.SAL as "사수 급여" , 
    d.DNAME as "부서 이름", sawon.HIREDATE as "사원 입사일" 

    from emp as sawon
    inner join dept as d 
    on d.DEPTNO = sawon.DEPTNO 
    inner join emp as sasu 
    on sawon.mgr = sasu.EMPNO 
    where d.loc = 'CHICAGO' and sasu.sal < 5000
    order by sawon.HIREDATE asc 


    select 
    사원번호
    사원이름
    사수번호 -> inner join 한번
    사수이름
    사수급여 -> inner join 두번
    부서명 -> 
    from emp as sawon
    inner join dept as d 
    on d.DEPTNO = sawon.DEPTNO
    inner join emp as sasu
    on sawon.mgr = sasu



    
## 서브쿼리란?
    하나의 쿼리 문장 내에 포함된 또 하나의 쿼리
    *최후의 수단으로 사용하는 거라 잘 안씀

    - 규칙
    1. 반드시 () 괄호로 묶음
    select
    (select...)
    from a table
    2. 서브쿼리가 먼저 실행된 후 외부쿼리와 비교 or 연산
    3. 서브쿼리가 가능한 곳
    3-1. select절 (스칼라 서브쿼리)
    3-2. from 절 (인라인 뷰 ) => 가장 많이 쓰임
    3-3. where 절 (중첩 서브쿼리)
    3-4. HAVING
    3-5. order by
    3-6. insert values
    3-7. update set => MYSQL는 실행 안됨

    
## update

    UPDATE [테이블] SET [열] = '변경할값' WHERE [조건]

    update emp 
    set ename = '홍길동'



## 문제풀이

    문제1. 10번 부서 사람들 중에서
    회사의 평균 급여보다 많이 받는 사람 조회
    힌트 where 서브쿼리

    select 
    *
    from emp
    where deptno = 10
    and sal >= (select avg(sal) from emp);



    문제2 . 사원번호가 7876인 사원과 job이 같은 사람을 모두 조회
    select 
    *
    from emp
    where job = (select job from emp where empno = 7876);

  


## inner, outer join 다시 문풀

    select 
    sawon.ENAME,
    sawon.empno,
    boss.mgr,
    boss.empno
    from emp as sawon
    inner join DEPT as boss
    on sawon.empno = boss.mgr

    아우터조인
    select
    e.ename,
    e.job,
    d.DNAME 
    from emp as e
    left join dept as d
    on d.DEPTNO = e.DEPTNO 
    where d.DNAME is not null




    셀프조인
    select 
    sawon.ename,
    boss.ename
    from emp as sawon
    inner join emp as boss
    on sawon.mgr = boss.empno
    where sawon.dePtNO = 20


   
    select 
    e.empno,
    e.ENAME,
    e.sal,
    e.job,
    d.dname,
    e.HIREDATE 
    from emp as e
    inner join dept as d
    on e.DEPTNO = d.DEPTNO 
    where 
    (
    e.job = 'manager'
    or 
    e.job = 'clerk'
    )
    and date_format(HIREDATE,'%Y') = '1982' => 대문자는 #### 소문자는 ##
    구분잘하기

