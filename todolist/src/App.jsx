import { useState } from 'react';
import TodoInsert from './comp/TodoInsert';
import TodoList from './comp/TodoList';

function App() {
  let [data, setData] = useState([]);

  return (
    <div className='todolist'>
      <h2>TodoList</h2>
      <p>할일 {data.length}개 남음</p>
      <TodoList data={data} setData={setData} />
      <TodoInsert setData={setData} />
    </div>
  );
}

export default App;
