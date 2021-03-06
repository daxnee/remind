## 220208

### DML
    INSERT
    DELETE
    UPDATE
    SELECT
### INSERT
```
- insert : 데이터를 저장

 - 작성법1)
    해당 테이블에 원하는 데이터만 넣는다면 테이블 뒤 괄호 작성
    ex)
    insert into dept(deptno, dname)
    values(80, '쏘리쏘리', )
    => 넣지 않은 loc은 null로 채워짐

    사용시 주의점 : 
        1. 테이블에 job컬럼을 not null로 설정했으면
        insert 할때 무조건 select에 데이터를 넣어야 함.
         *not null 확인방법 : 특정테이블(emp) - properties에서 not null, auto increment 여부 확인 가능

        2. 테이블에 기본키가 auto increment가 설정이 안 돼있으면
         기본키 데이터를 넣어야 함
        기본키가 증감함 (JAVA의 count++ 처럼) => 테이블 만드는 시간에 다시....

        3. commit;을 해야 최종 insert가 됨 (디비버는 오토커밋이기 때문에 커밋 안해도 업로드해줌)
            *** 실무때는 오토커밋 해제하고 commit;을 입력함 ***

        

    - 작성법2)
    해당 테이블에 데이터를 모두 넣는다면, 테이블 뒤 괄호 생략 가능

    insert into dept
    values(80, '쏘리쏘리', '대전')

    or

    insert into dept(deptno, dname, loc)
    values(80, '쏘리쏘리', '대전')
```  

### `Delete`
delete : 데이터를 삭제
```sql
DELETE FROM dept
WHERE deptno = 70
// deptno가 70인 데이터를 삭제

* 사용시 주의점 : 해당 컬럼이 ON DELETE CASCADE로 설정되어 있으면, 연관된 컬럼 모두 삭제됨. = > 관계형DB 라서 delete하기가 까다로움 
             
실무시, 실제로는 데이터 삭제하지 않고 컬럼을 따로 만들어서 회원 정보를 보관한다(데이터가 곧 회사의 자산이기 때문에)
ex) 컬럼이름 : 회원탈퇴여부
    (데이터 조회시, 'y' or 'n' 으로 조회)
```

### delete할때 주의점(where)
```
delete시 where조건에  pk와 같이 입력해서 delete해야 
다른 where 조건에 해당되는 컬럼들이 전부 다 지워지지 않는다.

```