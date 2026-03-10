import React from 'react'

function ReactRouter() {
    return (
        <div className="App">
            ※ a태그를 이용해 페이지 이동하는 것 처럼 리액트안에서 처리하기<br/><br/>
            1) 라우터 설치 (npm i react-router-dom)<br/>
            2) 설치한 모듈을 사용하여 App.js에 코드 작성<br/><br/>
            <textarea cols={100} rows={30}>
                {`
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Test from './Test';
import ReactRouter from './ReactRouter'

function App() {
    return (
    <Router>
        <header>
        <nav>
            <NavLink to="/">프로젝트생성</NavLink>
            <NavLink to="/router">라우팅</NavLink>
        </nav>
        </header>
        <main>
        <Routes>
            <Route path="/" element={<Test />} />
            <Route path="/router" element={<ReactRouter />} />
        </Routes>
        </main>
    </Router>
    );
}
                `}
            </textarea>
        </div>
    )
}

export default ReactRouter