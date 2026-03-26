import './App.scss'
import TodoHead from './comp/TodoHead';
import TodoList from './comp/TodoList';
import TodoInsert from './comp/TodoInsert';
import TodoStore from './store/TodoStore';
import { useEffect } from 'react';

function App() {
  const { get } = TodoStore();

  useEffect(() => { get('all') }, []);   // get()을 그냥 사용하면 무한 렌더링이 발생함

  return (
    <div className="App">
      <TodoHead />
      <TodoList />
      <TodoInsert />
    </div>
  );
}

export default App;