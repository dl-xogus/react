import { useState } from "react";
import TodoStore from "../store/TodoStore"

function TodoItem({ item }) {
  const { del, completeTodo, update } = TodoStore();

  /* 수정 상태 저장 */
  let [editId, setEditId] = useState(null);
  let [editText, setEditText] = useState("");

  return (
    <li className='todoitem' style={{ color: item.isdone ? 'green' : 'black' }}>
      {
        /* 수정할 값을 입력할 input으로 변경 */
        editId == item._id ?
          <form onSubmit={e => { e.preventDefault(); update(item._id, editText, setEditId); }}>
            <input autoFocus type="text" defaultValue={item.content} onChange={(e) => setEditText(e.target.value)} />
            <button>
              <span className="material-symbols-outlined">
                add
              </span>
            </button>
          </form>
          :
          <p className="con">{item.content}</p>
      }
      <div className="item-btns">
        {
          /* 수정 버튼 누르면 비활성화 || 완료되면 수정 버튼 비활성화 */
          editId == item._id || item.isdone == true ?
            <button disabled>
              <span className="material-symbols-outlined">
                edit
              </span>
            </button>
            :
            <button onClick={() => { setEditId(item._id); }}>
              <span className="material-symbols-outlined">
                edit
              </span>
            </button>
        }
        <button onClick={() => del(item._id)}>
          <span className="material-symbols-outlined">
            delete
          </span>
        </button>
        {
          /* 완료되면 완료 버튼 비활성화 */
          item.isdone == true ?
            <button disabled>
              <span className="material-symbols-outlined">
                check
              </span>
            </button>
            :
            <button onClick={() => completeTodo(item._id)}>
              <span className="material-symbols-outlined">
                check
              </span>
            </button>
        }
      </div>
    </li>
  )
}

export default TodoItem