import { useState } from "react";
import TodoStore from "../store/TodoStore";

function TodoHead() {
  const { data, get } = TodoStore();

  /* 남은 갯수 */
  let todoNum = data.filter((obj) => obj.isdone == false).length;
  let successNum = data.filter((obj) => obj.isdone == true).length;

  let [act1, setAct1] = useState(true);
  let [act2, setAct2] = useState(false);
  let [act3, setAct3] = useState(false);
  
  return (
    <div className="todohead">
      <h2>TodoList</h2>
      <div>
        <div className="num">
          <p>할 일 : {todoNum}</p>
          <p>완 료 : {successNum}</p>
        </div>

        <div className="btns">
          <button 
            className={act1 ? 'active' : ''}
            onClick={() => { 
              get('all'); 
              setAct1(true); 
              setAct2(false); 
              setAct3(false); 
            }}
          >
            전체
          </button>

          <button 
            className={act2 ? 'active' : ''} 
            onClick={() => { 
              get(false); 
              setAct2(true); 
              setAct1(false); 
              setAct3(false); 
            }}
          >
            진행중
          </button>

          <button 
            className={act3 ? 'active' : ''} 
            onClick={() => { 
              get(true); 
              setAct3(true); 
              setAct1(false); 
              setAct2(false); 
            }}
          >
            완료
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoHead