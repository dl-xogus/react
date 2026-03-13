import { useEffect, useState } from 'react';
import axios from 'axios'
import "../todolist.scss";

function TodoList({data, setData}) {

  useEffect(function(){
      axios.get("http://localhost:3001/todolist")
      .then(res=>{
        setData(res.data);
      });
  },[])


  return (
        <ul className="list">
            {
                data.map(function(item){
                    return <li>
                                {item.todo}
                                <span>
                                    <button>수정</button>
                                    <button>삭제</button>
                                    <button>완료</button>
                                </span>
                            </li> 
                })
            }
                       
        </ul>
  )
}

export default TodoList
