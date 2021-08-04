# pages 파일 만들기
-> index.jsx
-> join.jsx
-> login.jsx

-> posts 
  -> post.jsx

-> components 
    -> AppLayout.jsx

동적라우팅

# layout 만들기
-> components 폴더생성한뒤
    blogLayout.jsx 만들기
    그리고 안에다가 navComponent 만들기

-> components 폴더안에 
   -> Nav 컴포넌트만들어서 따로관리하기 및 
      import Link from 'next/Link' 설명하기
      * 주의사항 순수 React와 다름 React -> <Link to=""> 
                              Next.js -> <Link href=""><a>A태그 까지 감싸야함.</a></Link>

-> FormLayout.jsx 만들기
   회원가입 , 로그인 등 다른 레이아웃을 사용하기 때문

-> 타이틀 수정하기.
    import Head from 'next/head'

    title 수정하기 Blog

    og (Open Graph)
    https://velog.io/@byeol4001/Meta-Tag-OG%EC%98%A4%ED%94%88%EA%B7%B8%EB%9E%98%ED%94%84-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
   


페이지들의 공통 파일 처리방법 (컴포넌트 합성)
_app.jsx
ex ) css 공통파일 넣을때.


public 정적파일 설정
    * 이미지 가져오기  base url / 

<!-- image 컴포넌트 사용이유...,,
https://programming119.tistory.com/235 -->


폰트가져오기
link Head컴포넌트안에넣기 crossOrigin 조심.

공통 css만들기 index.css만들어서 사용하기

[name].module.css




# next Styled-component

babel-plugin-styled-components 관련설치방법
npm install --save-dev babel-plugin-styled-components

.babelrc 설정해주자
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}



redux 무작정 따라하기 

configureStore.js
파일생성후 

const configureStore = () => {

}

const wrapper = createWrapper(configureStore)

export default wrapper

npm install next-redux-wrapper


createWrapper 함수에서 두번째 인자값에 대한 설명 
{debug:  process.env.NODE_ENV === "development"} 설정

이후 _app.jsx에서 셋팅합니다.

npm install redux
npm install react-redux
npm install redux-devtools-extension

redux 미들웨어란.

상태가 변화기전 (dispatch) 주고 무언가 바꿀려고 할때.
바로 reducer에서 처리하는것이아니라 거처가는 작업을 만드는 공간 
한마디로 리덕스에 없던 기능을 추가해주는 역활이다~

가장 기본적인 미들웨어인 redux-thunk 에 대해서 알아봅시다.

함수로 만들게되면.
하나의 액션의 dispatch를 여러번 할 수있다.

그럼일단 사용해보자

간단한 미들웨어를 직접 구현해보자.

loggerMiddleware 사용해보기..
미들웨어는 dispatch 의 action값등 여러가지를 실행전 조작 해주는 아이다.
어려울거없다.

npm install redux-thunk 



aws 접속후 

git clone [원격저장소url]

package.json 
-> start 부분에서 -p 80 을 추가
포트를 80으로 시작한다는 의미


aws 에서

npx next build



aws 에서 nginx 서비스종료
sudo systemctl start nginx 
sudo systemctl stop nginx 
sudo systemctl restart nginx


