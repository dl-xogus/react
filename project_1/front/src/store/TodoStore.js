import { create } from 'zustand';
import axios from 'axios';



const TodoStore = create((set) => ({
    data: [],
    save: async (value) => {
        try {
            let res = await axios.post('http://localhost:4000/todo', value);
            set((item) => { return { data: [...item.data, res.data.data] } });
            /* 
                server/todolist.js의 todolist.post()에서 서버에 저장하고 front로 보내줄 때
                res.send({ success: true, data });
                이렇게 보내줬기 때문에 res.data.data로 접근해야 함
            */

            if (!res.data.success) {
                throw new Error(res.data.msg);      // 에러발생 시켜줌
                /* throw new Error(); 메모
                    throw   : 프로그램을 멈추고 에러로 처리하는 키워드
                    new     : 객체 생성 키워드
                    Error() : 에러 객체
                */
            }
        }
        catch (err) {
            console.error(`에러발생 - ${err}`);
        }
        /* try{}catch{}와 axios의 메모
            axios는 비동기 이기 때문에 try가 끝나고 난 뒤에 에러 발생
            따라서 async/await를 사용해주어야 catch가 잡아낼 수 있음
            아니면 axios자체에 .catch()라는 매서드를 사용하면 가능

            // axios의 .catch() 매서드 사용방법
            axios.post('http://localhost:4000/todo', value)
                .then(res => {
                    if (!res.data.success) {
                        throw new Error(res.data.msg);
                    }
                })
                .catch(err => {
                    console.error(`에러발생 - ${err}`);
                })
        */
    },
    get: async () => {
        const res = await axios.get('http://localhost:4000/todo');
        set({ data: res.data });        // zustand의 매개변수 set을 이용해 접근가능
    },
    update: async (id, editText, setEditId) => {
        try {
            const res = await axios.put(`http://localhost:4000/todo/state?id=${id}`, { content: editText });
            if (!res.data.success) throw new Error(res.data.msg);
            set(item => {
                let updateData = item.data.map(obj => {
                    if (obj._id == id) {
                        obj.content = editText;
                    }
                    return obj;
                });
                // id값 초기화 (안해주면 id가 계속 남아 3중연산자에서 수정 후에 수정된 할일이 출력 안되고 입력창 출력이 계속 실행됨)
                setEditId(null);        

                return { data: updateData };
            });
        }
        catch (err) {
            console.error(err);
        }
    },
    del: async (id) => {
        try {
            const res = await axios.delete(`http://localhost:4000/todo?id=${id}`);
            if (!res.data.success) throw new Error(res.data.msg);
            set(item => { return { data: item.data.filter(obj => obj._id != id) } });
        }
        catch (err) {
            console.error(err);
        }
    },
    completeTodo: async (id) => {
        try {
            const res = await axios.put(`http://localhost:4000/todo/state?id=${id}`, { isdone: true });
            if (!res.data.success) throw new Error(res.data.msg);
            set(item => {
                let updateData = item.data.map(obj => {
                    if (obj._id == id) {
                        obj.isdone = true;
                    }
                    return obj;
                });
                return { data: updateData };
            });
        }
        catch (err) {
            console.error(err);
        }
    }
}));

export default TodoStore;