/* App.js */
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Test from './Test';
import ReactRouter from './ReactRouter';
import Props from './Props';
import State from './State';
import Etc from './Etc';
import Css from './Css';

/* return 값은 하나여야 하기 때문에 한 덩어리로 만들어 줘야 함(태그로 묶음) */
/* <> </> 플래그먼트 태그(빈 태그) : 태그가 들어가지 않음(태그를 쓰고 싶지 않을 때) */
function App() {
  return (
    <Router>
      <header>
        <nav>
          <NavLink to="/">프로젝트생성</NavLink>
          <NavLink to="/router">라우팅</NavLink>
          <NavLink to="/props">프롭스(Props)</NavLink>
          <NavLink to="/state">스테이트(state)</NavLink>
          <NavLink to="/etc">기타</NavLink>
          <NavLink to="/css">CSS</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/router" element={<ReactRouter />} />
          <Route path="/props" element={<Props />} />
          <Route path="/state" element={<State />} />
          <Route path="/etc" element={<Etc />} />
          <Route path="/css" element={<Css />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
