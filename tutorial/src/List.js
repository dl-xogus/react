/* 
    매개변수로 받을 때 {obj} 중괄호 안에 넣는 이유

    - 매개변수가 obj일 때
    obj == {obj: { id: 111, title: '아바타', photo: './imgs/logo192.png' }}
    값을 꺼낼 때 : obj.obj.id
    
    - 매개변수가 {obj}일 때
    obj == { id: 111, title: '아바타', photo: './imgs/logo192.png' }
    값을 꺼낼 때 : obj.id

    이렇듯 편하게 쓰기 위해서 매개변수를 {obj}로 넣음
*/

function List({ obj }) {
    function contrl(id) {
        alert(id);
    };

    return (
        <li onClick={function () { contrl(obj.id) }}>
            <img src={obj.photo} alt="" />
            <p>{obj.title}</p>
        </li>
    )
}

export default List