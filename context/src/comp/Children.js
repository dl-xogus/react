import React, { useContext, useEffect } from 'react'
import { MyContext } from '../store/TodoStore';

function Children({ children }) {
    const { store, setStore } = useContext(MyContext);

    /* 스크롤 이벤트가 모든페이지에 걸리지 않고 Children 페이지에서만 걸리도록 해줌 */
    useEffect(() => {
        /* 마운팅 시점 */
        let scroll = () => {
            console.log(window.scrollY);
        };
        
        window.addEventListener('scroll', scroll);
        return () => {
            /* 언마운팅 시점 */
            window.removeEventListener('scroll', scroll);
        };
    }, []); 

    return (
        <div style={{height: '5000px'}}>
            <h2>제목</h2>
            {children}
        </div>
    )
}

export default React.memo(Children);    // 부모가 리렌더링이 날 때 자식은 리렌더링이 안걸리게 해줌 (부모에게 반항)