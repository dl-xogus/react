import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Swipers from './comp/Swipers';
import SignUpPage from './comp/SignUpPage';
import AboutMe from './comp/AboutMe';
import './App.scss';
import './css/index.scss';
import './css/common.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <NavLink to="/" className="logo">UI/UX Design</NavLink>
          <nav>
            <NavLink to="/">Slide</NavLink>
            <NavLink to="/">Profile</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/">Contect</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Swipers />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;