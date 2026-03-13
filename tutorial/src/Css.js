/* Css.js */
import { useState } from 'react';
import './css/style.scss';

function Css() {
    let [active, setActive] = useState(true);

    return (
        <div className='App'>
            <h2>SCSS</h2>
            <div className='color-skyblue'>
                1) npm i scss (묘듈설치)<br />
                2) import '파일명.scss';
            </div>

            <h2>STYLE</h2>
            <div style={{ color: 'pink', fontSize: '20px' }}>
                1) style코딩 작성 방법은 스크립트 객체 형태로 작성<br />
                <textarea cols='50' defaultValue={`style={{ color: 'pink', fontSize: '20px' }}`}></textarea>
            </div>

            <h2>class 제어</h2>
            <button className='active' onClick={(e) => {
                e.target.classList.toggle('active');
            }}>
                활성화
            </button>

            <button className={active ? 'active' : ''} onClick={(e) => {
                setActive(!active);
            }}>
                활성화
            </button>

            <div stlye={{ display: active ? 'block' : 'none' }}>
                팝업창
            </div>
        </div>
    );
}

export default Css