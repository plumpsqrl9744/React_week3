# Introduction Project
- 만든 사람들 : 나유진, 김혜진, 구장우 | 항해99 8기 주특기 숙련주차 1조
- 주 사용 기술 : ReactJS, Json-Server, Json DB, Redux-Toolkit, Redux-Thunk, Axios, Styled-Components
- 구현 기능 : 게시글 CRUD, 댓글 CRUD, Masonry Layout, Validation

## Guide Project
### Project start
  - 프로젝트 시작 : `yarn start`
  - json 서버 가동 : `yarn json-server --watch db.json --port 3003`

### Install packages
- json-server (서버) 설지 : `yarn add json-server`
- 리덕스 설치 : `yarn add react-redux`
- 툴킷 (리덕스) 설치 : `yarn add @reduxjs/toolkit`
- thunk (미들웨어) 설치 : `yarn add redux-thunk`
- axios(통신) 설치 : `yarn add axios` 
- 라우터 (페이지 이동) 설치 : `yarn add react-router-dom` 
- logger (개발 편하게 도와줌) 설치 : `yarn add redux-loger`
- styled-components (스타일 적용) 설치 : `yarn add styled-components`
- 유효성 검사(폼 사용자 입력 안내 적용) : `yarn add react-hook-form`
- connect-history-api-falback 설치 : `yarn add connect-history-api-fallback`

### Troube Shooting
- connect-history-api-fallback 현상
  * React, Vue 등 js 기반의 프레임워크, SPA (Single Page Application)를 사용하면 발생하는 문제
  * 새로고침, 외부 링크를 타고 갔다가 다시 돌아오는 뒤로가기 등등 에서 경로를 찾기 못하는 경우
    - ===> 어렵게 생각했었는 데, datail 컨포넌트에 추가로 데이터를 불러오면서 해결 완료

- 게시글 삭제 시 해당 게시글 댓글 처리
  * 게시글 삭제시 해당 댓글 삭제가 안되는 현상 발생

-----

### 폴더 및 파일 설명
- pages : 페이지 생성(App.js -> pages/)
  * PostsPage ::: [메인페이지]
  * DetailPage ::: [상세페이지]
  * ---------------- 

- components : 컨포넌트별 파일 생성
  * Layout ::: [공통] 레이아웃
  * Header ::: [공통] 헤더
  * Button ::: [공통] (추후) 만능버튼
  * ---------------- 
  * PostsForm ::: [메인페이지] 게시글 입력(게시글 입력 및 게시글 추가)
  * PostsList ::: [메인페이지] 게시글 조회(리스트 출력)
  * PostCard ::: [메인페이지] 각각의 게시글(게시글 삭제)
  * PostDetail ::: [상세페이지] 게시글 상세(게시글 수정 유도, 뒤로가기, 삭제)
  * PostRevise ::: [상세페이지] 게시글 수정(게시글 수정 기능)
  * ---------------- 
  * CommentsForm ::: [상세페이지] 댓글 입력(댓글 입력 및 댓글 추가 버튼)
  * CommentsList ::: [상세페이지] 댓글 조회
  * CommentCard ::: [상세페이지] 각각의 댓글
  * ---------------- 
  
- modules : 리덕스 관련 파일 생성
  * ConfigStore.js ::: 전역관리 스토어 생성
  * ---------------- 
  * Commons.jsx ::: 게시글 관리 / 리덕스(툴킷), 미들웨어(텅크)
  * Comments.jsx ::: 댓글 관리 / 리덕스(툴킷), 미들웨어(텅크)
  * ---------------- 

- shared : 라우터 관련 파일 생성
  * Router.js ::: 페이지 이동 관련 기능(라우터)
  * ---------------- 

-----

### 스타일 적용
- 전역 스타일 :  src/GlobalStyle.jsx (index.js에 연결)
- 각 컨포넌트 하단(export default 밑)에 스타일 컨포넌트 적용으로 통일

-----

### DB Format
- posts > id(게시글 아이디: 기본값), title(게시글제목), text(게시글내용), comments(댓글)
- ... comments > id(댓글 아이디: 기본값), writer(댓글 작성자), massage(댓글 내용)
```
{
  "posts": [
    {
      "id": 1,
      "title": "ReactJS",
      "text": "Hello World!",
    },
    {
      "id": 2,
      "title": "Javascript",
      "text": "hello world!",
    }
  ],
  "comments" : [
    {
      "id": 1,
      "writer": "이름",
      "message": "댓글 내용"
    },
    {
      "id": 2,
      "writer": "이름2",
      "message": "댓글 내용2"
    },
  ]
}
```

-----

### 함수명 설정
- input 입력값 추출 : `onChangeInputs`
- 게시글 추가 : `onCreatePost`
- 게시글 수정 : `onUpdatePost`
- 게시글 수정하기 토글 : `onTogglUpdatePost`
- 게시글 삭제 : `onDeletePost`
- 댓글 추가 : `onCreateComment`
- 댓글 수정 : `onUpdateComment`
- 댓글 삭제 : `onDeleteComment`
- 뒤로가기 : `onClickBack`

