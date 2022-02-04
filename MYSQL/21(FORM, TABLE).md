### 220204
## 오늘 배울 이론
    1)FORM 

    2)***TABLE (문제)

    3)기타 쩌리 태그

    4)***시맨틱 태그 & div(80%) (with css)


---


### FORM 태그
    웹 서버에 데이터를 전송할 때 사용하는 태그 (전송태그는 FORM말고도 다양하다)
    (HTML, 안드로이드는 바로 DB랑 연결 불가능)

    <form>
        <>
        <input type = "text">
    </form>


### IT 용어 ****

    GET : public 전송
    POST : private 전송 (숨겨서 전송)
    공통점 : 서버에 데이터를 전송하는 방법
            (http 메소드 종류 중에 해당함)

### TABLE 태그
    게시판, 시간표, 엑셀 시트, 데이터를 조회하고 싶을때 사용함

    <table>
          <thead> 컬럼이 온다
            </thead>  
            <tbody>데이터가 온다
            </tbody>
    </table>

    출장비 내역 ex)
    <table>
            <thead>
                <tr>
                    <!-- tr : table row : 테이블 행 -->
                    <th>출장비 내역</th>
                    <!-- th : table head : 테이블의 제목(컬럼) -->
                    <th>금액</th>


                </tr>
            </thead>
            <tr>
                <td>교통비</td>
                <td>30,000</td>

                <!-- td : table data : 열 데이터(컬럼의 데이터) -->
            </tr>
            <tr>
                <td>식비</td>
                <td>100,000</td>
            </tr>
            <tr>
                <td>숙박비</td>
                <td>500,000</td>
            </tr>

### TITLE, STYLE

    title이 탭의 제목
    아래에 style 입력 후 
    css로 웹페이지의 폰트, 배경등을 꾸밀 수 있음