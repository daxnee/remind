## 220310

### <JSON 문제 예시>
```json

Q.  
emp : SMITH의 사수가 두명일 때 
{
    empno : 7369;,
    ename : "SMITH",
    mgr : [7902, 7370]
    <!-- 스미스의 사수가 두 명이라면 그땐 배열로 표현해준다.  -->
}

":" 을 기준으로 key / value 으로 나뉜다.

중괄호로 위 데이터를 한 번에 묶어서 전송해주는 것이 JSON의 사용법이다.

Q.  스미스의 사수들의 직업과 급여를 알고싶다면?
emp : 
{
    empno : 7369;,
    ename : "SMITH",
    mgr : [{empno : 7902, job: "CLERK", SAL : 3000}, {empno : 7370, job : MANAGER, SAL : 2500}]
   
}

Q. SMITH의 직업과 급여를 알고싶다.
   SMITH의 부서이름을 알고싶다.
   SMITH의 부서위치를 알고싶다.
emp :
{
    ename : "SMITH"
    job : "CLERK",
    sal : 1200,
    dname : "SALES",
    count : 5
    
}

Q. SMITH의 사원번호와 급여를 알고싶다.
   SMITH의 사수는 3명이고,
   사수의 번호와 직업을 알고싶다.

emp : 
{
    empno : 7369,
    sal : 1200,
    ename : SMITH,
    mgr : [{empno : 7902, job : "CLERK"},{empno : 7370, job : "CLERK"},{empno : 7555, job : "MANAGER"}]
}



*JSON이 확장되다 보니 최근엔 중간에 의사소통을 번역해주는 역할도 생겼다 =  postman 사이트에서 가능(추후에 설치 예정)  
```