import { useState } from 'react';
import TodoInsert from './comp/TodoInsert';
import TodoList from './comp/TodoList';

function App() {
  let [data, setData] = useState([]);

  /* 할일 갯수 : data2.length */
  let data2 = data.filter(item => item.done == false);

  return (
    <div className='todolist'>
      <h2>TodoList</h2>
      <p>할 일 <span className='idx'>{data2.length}</span>개 남음</p>
      <TodoList data={data} setData={setData} />
      <TodoInsert setData={setData} />
    </div>
  );
}

export default App;
