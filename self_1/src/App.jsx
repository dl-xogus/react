import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './css/index.scss'
import ProductList from './pages/ProductList';
import ProductView from './pages/ProductView';
import CategoryList from './pages/CategoryList';
import data from './data/product.json';

function App() {
  return (
    <Router>
      <div className='tap'>
        <NavLink to='/'>All</NavLink>
        <NavLink to='/beauty'>Beauty</NavLink>
        <NavLink to='/fragrances'>Fragrances</NavLink>
        <NavLink to='/furniture'>Furniture</NavLink>
        <NavLink to='/groceries'>Groceries</NavLink>
      </div>

      <Routes>
        <Route path='/' element={<ProductList obj={data.products}/>} />
        <Route path='/:category' element={<CategoryList products={data.products}/>} />
        <Route path='/view/:id' element={<ProductView products={data.products}/>} />
      </Routes>
    </Router>
  );
}

export default App;
