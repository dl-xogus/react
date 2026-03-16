import { useState } from 'react';
import TodoInsert from './comp/TodoInsert';
import TodoList from './comp/TodoList';

function App() {
  let [data, setData] = useState([]);
  let [mode, setMode] = useState({state: 'insert', id: '', todo: ''});

  return (
    <div className='todolist'>
      <h2>TodoList</h2>
      <p>할 일 <span className='idx'>{data.length}</span>개 남음</p>
      <TodoList data={data} setData={setData} setMode={setMode} />
      <TodoInsert setData={setData} mode={mode} setMode={setMode} data={data} />
    </div>
  );
}

export default App;
