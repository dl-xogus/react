import { useState } from "react";

function State() {
    /* 변경한 값을 재출력 하려면 useState를 사용 */
    let [num, setNum] = useState(10);   // let [값이 담길 변수, 변경 함수 이름] = useState(값);
    let [data, setData] = useState([]);

    function incre() {
        setNum(++num);              // 변경 함수 안에서 변경
    }

    function nameList(e) {
        e.preventDefault();
        let value = e.target.name.value;

        setData([...data, value]);  // 기존 배열을 펼쳐서 앞에두고 뒤에 변경된 값을 넣어 새롭게 배열을 만들어줌
    }
    console.log(data);
    

    return (
        <div className="App">
            <h2>State</h2>
            <button onClick={incre}>{num}</button>

            <article>
                <h3>502호 강의실 수강생</h3>
                <div>
                    <form onSubmit={(e) => { nameList(e) }}>
                        <input type="text" name="name" />
                        <button>추가</button>
                    </form>
                </div>

                <ul>
                    {
                        data.map(function (name, i) {
                            return <li key={i}>{name}</li>
                        })
                    }
                </ul>
            </article>
        </div>
    )
}

export default State