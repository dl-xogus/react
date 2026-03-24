import { create } from 'zustand';
import axios from 'axios';

const TodoStore = create((set) => ({
    save: async (value) => {
        try {
            let res = await axios.post('http://localhost:4000/todo', value);

            if (!res.data.success) {
                throw new Error(res.data.msg);      // 에러발생 시켜줌
                /* throw new Error(); 메모
                    throw: 프로그램을 멈추고 에러로 처리하는 키워드
                    new: 객체 생성 키워드
                    Error(): 에러 객체
                */
            }
        }
        catch (err) {
            console.error(`에러발생 - ${err}`);
        }
        /* try{}catch{}와 axios의 메모
            axios는 비동기 이기 때문에 try가 끝나고 난 뒤에 에러 발생
            따라서 async/await를 사용해주어야 catch가 잡아낼 수 있음
            아니면 axios의 .catch() 매서드를 사용하면 가능

            // .catch() 매서드 사용방법
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
    update: async () => {},
    delete: async () => {}
}));

export default TodoStore;