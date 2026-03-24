import { useState } from "react"
import TodoStore from "../store/TodoStore";

function TodoInsert() {
  const { save } = TodoStore();     // { save }: TodoStore()에 있는 save를 꺼냄
  const [ip, setIp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    /* 값이 없으면 */
    if (!ip) {
      alert('할일을 작성하세요.');
      return;
    }

    /* 날짜 */
    const today = new Date();

    const datePart = new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(today).replaceAll(' ','');

    const timePart = new Intl.DateTimeFormat('ko-KR', {
      hourCycle: 'h23',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(today);

    const date = `${datePart}T${timePart}`;

    /* 
      const date = new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(today).replace(/[가-힣]+/, 'T').replaceAll(' ', '');
    */
    /* 
      date에 .format(today)를 바로 붙혀서 저장시키면 편하게 사용가능
      replace(대체 하고싶은 값, 대체할 값): 대체해서 변경해줌
      정규표현식 /[가-힣]+/ : 모든 한글
    */

    /* 저장 */
    save({ content: ip, date });
  };

  return (
    <div className="todoinsert">
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" value={ip} onChange={e => setIp(e.target.value)} />
        <button>추가</button>
      </form>
    </div>
  )
}

export default TodoInsert