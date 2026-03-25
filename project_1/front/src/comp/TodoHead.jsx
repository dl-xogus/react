import TodoStore from "../store/TodoStore";

function TodoHead() {
  const { data } = TodoStore();
  

  return (
    <div className="todohead">
      <h2>TodoList</h2>
      <div>
        <div>
          할일({data.filter((obj) => obj.isdone == false).length}) / 완료({data.filter((obj) => obj.isdone == true).length})
        </div>
        <div className="btns">
          <button>전체</button>
          <button>진행중</button>
          <button onClick={() => {}}>완료</button>
        </div>
      </div>
    </div>
  )
}

export default TodoHead