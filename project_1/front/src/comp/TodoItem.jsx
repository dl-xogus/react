import { useState } from "react";
import TodoStore from "../store/TodoStore"

function TodoItem({ item }) {
  const { del, completeTodo, update } = TodoStore();

  /* 수정 상태 저장 */
  let [editId, setEditId] = useState(null);
  let [editText, setEditText] = useState("");

  return (
    <li className={item.isdone ? 'todoitem success' : 'todoitem'}>
      {
        /* 수정할 값을 입력할 input으로 변경 */
        editId == item._id ?
          <form onSubmit={e => { e.preventDefault(); update(item._id, editText, setEditId); }}>
            <input autoFocus type="text" defaultValue={item.content} onChange={(e) => setEditText(e.target.value)} />
            <button>저장</button>
          </form>
          :
          item.content
      }
      <div>
        {
          /* 수정 버튼 누르면 비활성화 || 완료되면 수정 버튼 비활성화 */
          editId == item._id || item.isdone == true ?
            <button disabled>수정</button>
            :
            <button onClick={() => { setEditId(item._id); setEditText(item.todo); }}>
              수정
            </button>
        }
        <button onClick={() => del(item._id)}>삭제</button>
        {
          /* 완료되면 완료 버튼 비활성화 */
          item.isdone == true ?
            <button disabled>완료</button>
            :
            <button onClick={() => completeTodo(item._id)}>완료</button>
        }
      </div>
    </li>
  )
}

export default TodoItem


