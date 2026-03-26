import TodoStore from "../store/TodoStore"
import TodoItem from "./TodoItem"

function TodoList() {
  const { data } = TodoStore();

  if (!data.length) return <div className="todolist">준비중...</div>  // data가 들어오지 않았을때 대체방법1

  return (
    <ul className="todolist">
      {
        // data.length && <>하이~~</>    // data가 들어오지 않았을때 대체방법2
        data.map(item => {
          return <TodoItem key={item._id} item={item} />
        })
      }
    </ul>
  )
}

export default TodoList