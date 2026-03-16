import axios from 'axios'
import { useEffect, useState } from 'react';

function TodoInsert({ setData, mode, setMode, data }) {
    const [todo, setTodo] = useState('');

    useEffect(() => {
        setTodo(mode.todo);
    }, [mode])

    /* 저장 */
    const insert = (e) => {
        e.preventDefault();
        let target = e.target.content;

        // .then() 은 서버로부터 값을 받아야 할 때만 사용
        axios.post('http://localhost:3001/todolist', { "todo": target.value, "done": false })
            .then(res => {
                setData((items) => [...items, res.data])
            })
        /* 
            axios.post()를 이용해서 값을 저장
            저장 후에 .then()으로 저장한 값을 받을 수 있음
            data변수에 저장한 값을 추가
        */

        target.value = '';      // submit 후 input box를 비움
        target.focus();         // submit을 해도 box를 벗어나지 못하게
        setTodo('');
    }

    /* 수정 */
    const update = (e) => {
        e.preventDefault();
        let target = e.target.content;
        axios.put(`http://localhost:3001/todolist/${mode.id}`, { todo: target.value, done: false })
            .then(res => {
                setData(data.map(item => item.id == mode.id ? res.data : item));
                /* 초기화 */
                setMode({ state: 'insert', id: '', todo: '' });
                setTodo('');
            })
    }

    return (
        <div className='insert'>
            {mode.state == 'insert' ?
                <form onSubmit={e => insert(e)}>
                    <input type="text" name='content' value={todo} onChange={e => setTodo(e.target.value)} />
                    <button>저장</button>
                </form>
                :
                <form onSubmit={e => update(e)}>
                    <input type="text" name='content' value={todo} onChange={e => setTodo(e.target.value)} />
                    <button>수정</button>
                </form>
            }
        </div>
    )
}

export default TodoInsert