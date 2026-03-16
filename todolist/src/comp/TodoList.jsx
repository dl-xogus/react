import { useEffect, useState } from 'react';
import axios from 'axios'
import "../todolist.scss";

function TodoList({ data, setData, setMode }) {
    /* 저장 */
    useEffect(() => {
        axios.get("http://localhost:3001/todolist")
            .then(res => {
                setData(res.data);
            });
    }, [])

    /* 삭제 */
    const del = (id) => {
        axios.delete(`http://localhost:3001/todolist/${id}`);
        setData(data.filter(item => item.id != id));
    };

    /* 수정 */
    const updateState = (id, todo) => {
        setMode({ mode: 'update', id, todo });       // id: id 처럼 속성의 이름과 값의 이름이 같다면 id 하나만 써도 됨
    }

    return (
        <ul className="list">
            {
                data.map(item =>
                    <li key={item.id}>
                        {item.todo}
                        <span>
                            <button onClick={() => updateState(item.id, item.todo)}>수정</button>
                            <button onClick={() => { del(item.id) }}>삭제</button>
                            <button>완료</button>
                        </span>
                    </li>
                )
            }

        </ul>
    )
}

export default TodoList
