import './App.scss'
import TodoHead from './comp/TodoHead';
import TodoList from './comp/TodoList';
import TodoInsert from './comp/TodoInsert';

function App() {
  return (
    <div className="App">
      <TodoHead />
      <TodoList />
      <TodoInsert />
    </div>
  );
}

export default App;