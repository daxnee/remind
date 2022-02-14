 ### 220211

### CSS
 - CSS는 3가지만 알기!
    1. position
    2. margin, padding, box-size
    3. flex (암기필수) (or inline-block)

    
### position 4가지 
    static, fixed, absolute, relative

복습끝

---

### card 레이아웃
- overflow : 컨텐츠가 너무 커서 요소내에 모두 보여주기 힘들때 사용

- overflow : hidden(넘치는 부분 자름)
             visible(기본값)
             scroll (스크롤 바 추가)

    .card에서 크기와 오버플로우를 설정해준 후 
    .card img의 크기를 조절한다.

```css

     .card {
        display: inline-block;
        /* 카드를 가로로 배치해줘 */
        /* 지금은 보통 flex로 대체함 (케바케) */
        
        margin: 15px;
        border-radius: 8px;
        height: 400px;
        width: 260px;
        overflow: hidden;
        box-shadow: 0 5px 35px rgb(82, 79, 80);
        padding: 5px;
        /* y축, x축, 전체 */
        transform: scale(1);

        transition: 0.2s;
        /* 포인터를 올릴 때 움직이는 속도 */
      }
      .card:hover {
        cursor: pointer;
        transform: scale(2);
        /* scale : 포인트 올릴 때 이미지 축소 */
        /* 1이 원래 크기
        1을 기준으로 숫자가 크면 확대, 작으면 축소 */
      }

```   

    card의 transform : 원래 크기로 돌아와
    card:hover의 transform : 원래 크기에서 확대/축소해줘

### flex
- flex?
    
    배열이라고 생각
    flex container 안에 item(원소)들이 있음

    ex) 네이버 사이트의 메일, 카페, 블로그, 지식in 이 나열된 메뉴

  ```css  
    <!-- div.item${$}*10 => css의 for문이라고 생각 -->
    순번이 매겨진 클래스 10개가 생성됨
        <div class="item1">1</div>
        <div class="item2">2</div>
        <div class="item3">3</div>
        <div class="item4">4</div>
        <div class="item5">5</div>
        <div class="item6">6</div>
        <div class="item7">7</div>
        <div class="item8">8</div>
        <div class="item9">9</div>
        <div class="item10">10</div>

        이렇게 만들면 하나씩 flex 속성을 줘야하기 때문에
        10개의 item들의 속성을 일괄로 줄 수 있는
        전역변수를 만들어줘야 한다.
        
        <!-- div.item.item${$}*10  -->
        /* 앞에 item을 붙여줌 */
        <div class="container">
        <div class="flex-container">
        <div class="item item1">1</div>
        <div class="item item2">2</div>
        <div class="item item3">3</div>
        <div class="item item4">4</div>
        <div class="item item5">5</div>
        <div class="item item6">6</div>
        <div class="item item7">7</div>
        <div class="item item8">8</div>
        <div class="item item9">9</div>
        <div class="item item10">10</div>
        

        만들어준 전역변수를 아래와 같이 사용하면
        10개의 속성을 한번에 줄 수 있음!

        ex) 
        .item {
        /* 10개의 item들의 전역변수!! */
        width: 100px;
        height: 70px;
        border: 1px solid darkcyan;
  
    => flex를 쓰는 이유
    디스플레이들마다 다른 레이아웃을 맞춰줌



### justify / wrap
- justify-content: space-around;

     : 각 item들(원소) 한 개당의 양쪽 간격 넓힘
- justify-content: space-between;
    
    : 각 item들의 간격 넓힘

    *둘중 하나를 선택해서 쓰기


### wrap

- flex-wrap: wrap;
        /* 화면 작아지면 속성들이 화면에 맞춰서 배치됨 */

    시멘틱 레이아웃 확인하기(flex 사이트):  https://css-tricks.com/snippets/css/a-guide-to-flexbox/



### header
- header

```css
1. <header> </header>
2. <div class="class header"></div>
두 개 다 같음 (1번을 지향)

!-- 시멘틱 태그(header)로 설정하면 검색시 효율적인 검이 가능함-->
```

### li 태그 여러개 만들기

    <li><a href=""></a></li> 5개 만들기
    =>  (li>a)*5
    


### 사이트 구성(Semantic layout)
    사이트 구성을 알고 싶다면 'Semantic layout' 구글링
    but, 실무에서 시멘틱을 지키는 회사는 거의 없다. 왜인지는 모름,, 


### IT용어
    검색엔진(SEO)


### 파비콘
- 파비콘? 
    
    : 웹페이지 탭 앞에 있는 아이콘

    1) 원하는 이미지 저장 후

    2) https://www.favicon-generator.org/ 
     
    3) 이미지 파비콘으로 변환 & 다운로드 후
    
    4) 파비콘 적용시해당 파일에 확장자 ico 이미지 파일 넣기
    
    5) meta 아래 
    <link rel="shortcut icon" href="이미지파일이름" type="image/x-icon" />
    태그 넣어주기


### css 설정시 
    css 설정시, class의 css는 .을 붙이고 
    그냥 줄때는 .없이 준다

    
