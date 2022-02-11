### 220209

    auto 검색해서 1,2번째 설치 = 태그 오타 수정해줌

### margin / padding

    div(박스 태그)
    공통점: 박스 간격 조절
    margin : 부모 박스와 부모 박스 간의 간격을 조절
    padding : 부모 박스 안에 있는 자식 박스의 간격 조절
    부모 태그 안에 써줘야 적용됨


### padding 작성법 4가지(실무에서 쓰는 방법대로 숙지)

    padding : 부모 태그와  자식 태그의 간격(거리두기)
    부모 태그 css에 적용해야한다.

    - padding : 10px; // 동서남북 모두 10px 패딩됨(간격조절)
    - padding : 5px(위) 10px(오른쪽&왼쪽) 0(아래);
    - padding : 5px(위&아래) 10px(오른쪽&왼쪽);
    - padding : 10px(위) 10px(오른쪽) 10px(아래쪽) 10px(왼쪽)

      *이런식으로 사용도 가능
      padding-top : 10px;

### margin

    margin : 부모와 부모 거리두기
    
    ex) 
    <div>
    <p>안녕하세요</p>
    이 간격을 조절
     <p2>안녕하세요</p2>
    div</>
    (padding 과 사용법 동일함)

    - margin : 10px; // 동서남북 모두 10px 패딩됨(간격조절)
    - margin : 5px(위) 10px(오른쪽&왼쪽) 0(아래);
    - margin : 5px(위&아래) 10px(오른쪽&왼쪽);
    - margin : 10px(위) 10px(오른쪽) 10px(아래쪽) 10px(왼쪽)
