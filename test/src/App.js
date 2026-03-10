import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './App.css';
import Test from './Test'
import ReactRouter from './ReactRouter';

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
          <Route path='/' element={<Test />} />
          <Route path='/router' element={<ReactRouter />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
