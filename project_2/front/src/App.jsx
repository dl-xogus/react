import { useState } from 'react';
import './App.scss';

function App() {
  const [cur, setCur] = useState(new Date());

  const year = cur.getFullYear();
  const month = cur.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();

  const calendar = [];

  /* 앞 빈칸 */
  for (let i = 0; i < firstDay; i++) {
    calendar.push(null);
  }

  /* 날짜 채우기 */
  for (let i = 1; i <= lastDay; i++) {
    calendar.push(i);
  }

  const prevMonth = () => {
    setCur(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCur(new Date(year, month + 1, 1));
  };

  const today = new Date();

  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  return (
    <div className="App">
      <h2>{year}년 {month + 1}월</h2>

      <div>
        <button onClick={() => { prevMonth() }}>전</button>
        <button onClick={() => { nextMonth() }}>후</button>
      </div>

      <div className='calendar' style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {['일', '월', '화', '수', '목', '금', '토'].map((d) => (
          <div className='weeks' key={d}>{d}</div>
        ))}

        {calendar.map((day, idx) => {
          const isToday =
            day &&
            day === todayDate &&
            month === todayMonth &&
            year === todayYear;

          return (
            <div className='days'
              key={idx}
              style={{
                border: isToday ? '2px solid #3264FF' : 'none',
              }}
            >
              <div className='day'
                style={{
                  background: isToday ? '#3264FF' : 'transparent',
                  color: isToday ? '#ffff' : '#000',
                }}
              >
                {day}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
