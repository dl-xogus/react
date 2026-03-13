import axios from 'axios'

function TodoInsert({ setData }) {
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
    }

    return (
        <div className='insert'>
            <form onSubmit={e => insert(e)}>
                <input type="text" name='content' />
                <button>저장</button>
            </form>
        </div>
    )
}

export default TodoInsert