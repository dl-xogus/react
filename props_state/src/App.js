/* App.js */
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'  // imrr 하면 나오고 Routes 추가 해줘야 함
import './css/index.scss'
import Index from './pages/Index';
import Sub from './pages/Sub';
import Header from './comp/Header';

/* 
  comp (Header/   List/Item/View)
  pages (Index / Sub)
*/
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/sub/:type' element={<Sub />} />   {/* 경로/:이름 (주소 뒤에 경로로 인식하지 않고 구분자로 받을 수 있게 해줌) */}
        </Routes>
      </main>
      <footer></footer>
    </Router>    
  );
}

export default App;
