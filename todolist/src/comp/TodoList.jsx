/* import의 우선순위는 모듈 제일 우선 */
import { useEffect, useState } from 'react';
import axios from 'axios'
import '../todolist.scss';

function TodoList({ data, setData }) {
    /* 저장 */
    useEffect(() => {           // useEffect(함수, []) : 함수안 내용을 한번만 실행하게 함
        axios.get('http://localhost:3001/todolist')
            .then(res => {
                setData(res.data);
            })
    }, [])

    /* 수정 */
    let [editId, setEditId] = useState(null);
    let [editText, setEditText] = useState("");

    const editTodo = (id) => {
        axios.put(`http://localhost:3001/todolist/${id}`, { todo: editText, done: false })
            .then(res => {
                setData(data.map(item => item.id == id ? res.data : item));     // 수정할 id와 같으면 변경하고 아니면 그대로
                setEditId(null);
            })
    }

    /* 삭제 */
    const del = (id) => {
        axios.delete(`http://localhost:3001/todolist/${id}`);
        setData(data.filter(item => item.id != id));
    }

    /* 완료 */
    const clear = (id, todo) => {
        axios.put(`http://localhost:3001/todolist/${id}`, { id: id, todo: todo, done: true })
            .then(res => {
                setData(data.map(item => item.id == id ? res.data : item))
            })
    }

    return (
        <ul className='list'>
            {
                data.map((item) =>
                    <li key={item.id}>
                        {
                            editId == item.id
                                ? <form onSubmit={() => editTodo(item.id)}>
                                    <input type="text" onChange={(e) => setEditText(e.target.value)} />
                                    <button onClick={() => editTodo(item.id)}>
                                        저장
                                    </button>
                                </form>
                                : item.done == true ? <span className='clear'>{item.todo}</span> : item.todo
                        }
                        <span>
                            {
                                editId == item.id
                                    ? ''
                                    : <button onClick={() => { setEditId(item.id); setEditText(item.todo); }}>
                                        수정
                                    </button>
                            }
                            <button onClick={() => { del(item.id) }}>삭제</button>
                            {
                                item.done == true
                                    ? <button disabled>완료</button>
                                    : <button onClick={() => { clear(item.id, item.todo) }}>
                                        완료
                                    </button>
                            }
                        </span>
                    </li>
                )
            }
        </ul >
    )
}

export default TodoList