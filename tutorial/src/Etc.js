import { useState } from "react";

let intial = [];

function Etc() {
    let [data, setData] = useState(intial);

    /* 이름 저장 함수 */
    function saveFun(e) {
        e.preventDefault();
        let value = e.target.n.value;
        setData([...data, { id: Date.now(), name: value }]);
    };

    /* 이름 삭제 함수 */
    function removeFun(id) {
        setData(data.filter((obj) => obj.id !== id))
    };

    let [imgData, setImgData] = useState([]);

    /* 이미지 저장, 삭제 함수를 변수 하나에 */
    let g = {
        save: function (e) {        // 저장 함수
            e.preventDefault();
            setImgData([...imgData, e.target.img.value]);
        }
        // del: function () {}         // 삭제 함수
    };

    return (
        <div className='App'>
            <h2>Etc</h2>
            <div>
                <form onSubmit={(e) => { saveFun(e) }}>
                    <input type="text" name="n" />
                    <button>저장</button>
                </form>

                <ul>
                    {
                        data.map((item, i) => 
                            <li key={i}>
                                <span>{item.name}</span>
                                <button onClick={() => { removeFun(item.id) }}>삭제</button>
                            </li>
                        )
                    }
                </ul>
            </div>

            <div>
                <form onSubmit={(e) => { g.save(e) }}>
                    <input type="text" name="img" />
                    <button>저장</button>
                </form>

                <ul>
                    {imgData.map((img, i) => <li key={i}><Image url={img} /></li>)}
                </ul>
            </div>
        </div>
    );
}

function Image({ url }) {
    let [like, setLike] = useState(0);

    return (
        <>
            <img src={url} width="100" />
            <button onClick={() => { setLike(like + 1) }}>
                ♥ {like}
            </button>
        </>
    );
}

export default Etc