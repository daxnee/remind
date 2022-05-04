### 이클립스는  `EE` 와 `ED` 로 나뉜다.
(이클립스 설치시 선택사항)

- 자바 프로그래밍만 공부하고 싶으면 = SE (스프링 사용시, 개별 설치 필요)
- 자바를 이용해서 스프링과 함께 웹을 개발하고 싶으면 = EE


###  import
이클립스 File -> import -> Gradle or Maven (Existing Maven Projects)


### 1. 깃헙 들어가서 레파짓토리 생성
1. git init 
2. git add README.md
3. git add .
4. git commit -m "커밋 메시지"
4-1. git config --global core.autocrlf true (깃 commit 오류시 선택사항)
5. git branch -M main
6. git remote add origin https://github.com/daxnee/'내 깃헙 주소'
7. git push -u origin main

---

### 2. 파일 등록 됐으면
spring workspace - 폴더 바탕에 git bash - git clone + 레파짓토리 주소 
=> 깃헙 레파짓토리 내 pc에 다운로드 완료 됐는지 확인
### 3. 이클립스 들어가서
file - import - 그래들 클릭 - 코끼리 - 넥스트 - 경로 설정(내가 다운 받을 파일로) - finish

### 이클립스 새 레파짓토리 오류 
이클립스에서 새 폴더를 import할때 원래 있던 폴더의 이름이 중복되서 오류가 남
=> 해당 폴더의 settings.gradle 클릭 - 해당 폴더 이름과 동일하게 설정해줌 ex) DW_spring이면  rootProject.name = 'DW_spring'

### git 확인
이클립스 우측 상단 Open Perspective(달력+) 클릭 - Git - 내 레파짓토리 확인 



### .gitignore 파일
: 여기에 파일명을 적으면 그거 빼고 푸시가 된다 
ex) private/ 
이런식으로 작성 



### bash는 리눅스 명령어 