import './App.css';
import { useState } from 'react';
import ItemList from './comp/ItemList';

function App() {
  let [data, setData] = useState('hello');

  return (
    <div className="App">
      <ItemList />
    </div>
 );
}

export default App;
