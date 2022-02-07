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

    여기서, 