import { useState } from 'react';
import HalfRating from './comp/HalfRating';
import TextFieldBox from './comp/TextFieldBox';
import Slide from './comp/Slide';
import Tailwind from './comp/Tailwind';
import FramaMotion from './comp/FramaMotion';
import DaumPost from './comp/DaumPost';
import ReactCalendar from './ReactCalendar';
import './App.css';

function App() {
  /* 컴포넌트의 value값을 가져오는 방법 */
  let [form, setForm] = useState({});
  const save = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="App" style={{}}>
      <article>
        <h2>MUI</h2>
        <ul>
          <li><TextFieldBox label="아이디" save={save} /></li>
          <li><TextFieldBox label="패스워드" save={save} /></li>
          <li style={{ display: 'flex', justifyContent: 'center' }}>
            <HalfRating />
          </li>
        </ul>

        {/* 
          css (부모가 자손을 중앙 정렬)
          => text-align: center; (inline, inline-block)
          => flex, grid (block, flex)
        */}

      </article>

      <article>
        <h2>Swiper</h2>
        <Slide />
      </article>

      <article>
        <h2>Tailwind CSS</h2>
        <Tailwind />
      </article>

      <article>
        <h2>Motion</h2>
        <FramaMotion />
      </article>

      <article>
        <h2>Post Code</h2>
        <DaumPost />
      </article>

      <article>
        <h2>Calendar</h2>
        <ReactCalendar />
      </article>
    </div>
  );
}

export default App;