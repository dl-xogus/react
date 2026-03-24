
function TodoHead() {
  return (
    <div className="todohead">
        <h2>TodoList</h2>
        <div>
            <div>할일(6) / 완료(6)</div>
            <div>
                <button>전체</button>
                <button>진행중</button>
                <button>완료</button>
            </div>
        </div>
    </div>
  )
}

export default TodoHead