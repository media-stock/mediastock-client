# MediaStock Client

## Tech

-   React.js
-   Redux
-   Redux Thunk
-   Redux Persist
-   Immutable
-   styled-components

## 2020.12.20

1. 소셜 - 회원가입, 로그인 모두 추가
2. Media's Talk 기능 구현 (댓글 업로드가 cors에 걸려서 현재는 잠시 멈춰있습니다.)
3. 경매 파트는 클라이언트 소켓연결 부분이 미완성이라 나머지가 완성이 되면 진행할까 생각중입니다.
4. 미톡마켓: 서버랑 연동되는 부분이 어디인지 몰라 퍼블리싱 구현
5. 더보기: 퍼블리싱 어느정도
6. Redux Store 구조 변경, 그에 맞게 어드민도 변경

퍼블리싱을 구현하면서 디자인적으로 말이 안되는 부분이 정말로 많아서..
퍼블리싱에서만 해도 페이지가 많아 시간이 부족할 수 밖에 없는 상황이였는데, 디자인도 말이 안되는 부분을 수정하다보니 시간이 많이 부족했습니다.
시간도 부족하게 주셔서 말씀해주셨던 시간안에 전체 다 구현하는건 절대적으로 무리라고 판단됩니다. 최대한 힘 닿는데까지 구현을 해보았습니다.
시간적으로 서버가 어디 페이지에 매핑되는지 정확하게 몰라서 연결을 하지 못한점도 있었습니다. 이 부분은 퍼블리싱이 어느정도 된 상태에서 문기형과 이야기해볼 예정입니다.

## 수행업무 현황 1월

1. 전반적인 퍼블리싱이 완성되었습니다.
2. 데이터 관리 설계가 마무리 되었습니다.
3. 서버에게 데이터 요청 부분이 대부분 완료되었습니다.
4. 서버에서 요청을 날리는 페이지의 검색엔진 최적화가 완성되었습니다.
5. QA를 진행하고, 퍼블리싱에 빠진 부분이 없는지 확인하고 있습니다.
6. 어드민 사이트에 빠진 기능이 없는지 확인중입니다.

## 수행업무 현황 12월

1. 어드민 사이트 개발
    - 채널 목록 보여주기
    - 채널 자세히 보여주기
    - 채널 영상 목록 보여주기
    - 채널 통계 보기
    - 게시판 글 목록 보기
    - 게시판 글 자세히 보기
    - IPO 목록
2. 레이아웃 구성
    - 모바일 레이아웃과 PC 레이아웃 분리
    - 모바일 레이아웃 헤더와 푸터 추가
    - 모바일 Media's Talk 게시판 목록 보기
    - 모바일 Media's Talk 게시판 자세히 보기

## 수행업무 현황 11월

1. 랜딩페이지 구성, 이메일 수집 서버와 연결
2. 어드민 사이트 틀 잡기
    - 개발 서버와 연결하기
    - 전체적인 레이아웃 잡기
    - 각각의 기능에 대해 목록 불러오기, 자세히 보기 View 구성 및 서버에서 데이터 가져오기 구성
3. mediastock.co.kr 도메인과 연결
4. AWS Lambda 서비스를 이용해서 배포, Cloudfront를 이용해 사용자가 접속을 최적화 할 수 있도록 함.

## 수행업무 현황 10월

1. React.js + Next.js 구조 구성.
2. SEO 최적화를 위해 meta태그 및 opengraph 구성.
3. 데이터 가공 및 저장을 큰 프로젝트에 최적화 시키기 위해서 Redux 채용
4. 로그인 데이터를 저장하기 위해서 Redux-Persist이용 (localStorage이용해서 저장)
5. React.js의 불변성 법칙을 지키기 위해서 immutable 모듈을 이용
6. 로그인 UI 구성 및 서버 요청 구성.
7. 어드민 UI 구성 틀 잡기.
