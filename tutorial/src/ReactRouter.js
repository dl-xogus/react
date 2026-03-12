/* ReactRouter.js */
import React from 'react'

function ReactRouter() {
    return (
        <div className='App'>
            ※ a태그를 이용해 페이지 이동하는 것 처럼 리액트안에서 처리하기 <br/>

            1) 라우터 설치 (npm i react-router-dom) <br/>
            2) 설치한 모듈을 사용하여 App.js에 코드 작성 <br/>
            <textarea cols="100" rows="30">
                {`
/* App.js */
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Test from './Test';
import ReactRouter from './ReactRouter'


/* return 값은 하나여야 하기 때문에 한 덩어리로 만들어 줘야 함(태그로 묶음) */
/* <> </> 플래그먼트 태그(빈 태그) : 태그가 들어가지 않음(태그를 쓰고 싶지 않을 때) */
function App() {
    return (
    <Router>
        <header>
        <nav>
            <NavLink to="/">프로젝트생성</NavLink>
            <NavLink to="/router">라우팅</NavLink>
            <NavLink to="#">nav 03</NavLink>
        </nav>
        </header>
        <main>
        <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/router" element={<ReactRouter />} />
        </Routes>
        </main>
        <footer>카피라이트...</footer>
    </Router>
    );
}

export default App;
                `}
            </textarea>
        </div>
    )
}

export default ReactRouter