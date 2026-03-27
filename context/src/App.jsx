import { useContext, useState } from 'react';
import './App.css';
import Children from './comp/Children';
import TodoStore from './store/TodoStore';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Test from './pages/Test';


function App() {
  const [num, setNum] = useState(0);

  return (
    <Router>
      <TodoStore>
        <button onClick={() => { setNum(num + 1); }}>
          {num}
        </button>

        <NavLink to="/">App페이지 이동</NavLink>
        <NavLink to="/test">Test페이지 이동</NavLink>

        <Routes>
          <Route path="/" element={<Children />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </TodoStore>
    </Router>
  );
}

export default App;
