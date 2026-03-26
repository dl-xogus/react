import { useState } from 'react';
import './App.scss';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // 현재 달의 첫 날
  const firstDayOfMonth = new Date(year, month, 1);

  console.log(firstDayOfMonth);
  
  
  // 달력 시작 날짜를 현재 달의 첫 날의 주의 일요일로 설정
  const startDay = new Date(firstDayOfMonth);
  startDay.setDate(1 - firstDayOfMonth.getDay());
  
  // 현재 달의 마지막 날
  const lastDayOfMonth = new Date(year, month + 1, 0);
  // 달력 끝 날짜를 현재 달의 마지막 날의 주의 토요일로 설정
  const endDay = new Date(lastDayOfMonth);
  endDay.setDate(lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay()));
  
  console.log(startDay);

  /** startDay부터 endDay까지의 날짜를 주 단위로 그룹화하는 함수 */
  const groupDatesByWeek = (startDay: Date, endDay: Date) => {
    const weeks = []; // 최종적으로 주 단위로 그룹화된 날짜 배열들을 저장할 배열
    let currentWeek = []; // 현재 처리 중인 주를 나타내는 배열
    let currentDate = new Date(startDay); // 반복 처리를 위한 현재 날짜 변수, 시작 날짜로 초기화

    // 시작 날짜부터 끝 날짜까지 반복
    while (currentDate <= endDay) {
      currentWeek.push(new Date(currentDate)); // 현재 날짜를 현재 주에 추가
      // 현재 주가 7일을 모두 채웠거나 현재 날짜가 토요일인 경우
      if (currentWeek.length === 7 || currentDate.getDay() === 6) {
        weeks.push(currentWeek); // 완성된 주를 weeks 배열에 추가
        currentWeek = []; // 새로운 주를 시작하기 위해 currentWeek을 재초기화
      }
      currentDate.setDate(currentDate.getDate() + 1); // 현재 날짜를 다음 날로 변경
    }

    // 마지막 주 처리 (만약 남아있다면)
    if (currentWeek.length > 0) {
      weeks.push(currentWeek); // 남아 있는 날짜가 있다면 마지막 주로 weeks에 추가
    }

    return weeks; // 주 단위로 그룹화된 날짜 배열들을 반환
  };

  const handlePrevMonth = () => {
    // 이전 달로 이동
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    // 다음 달로 이동
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

















  return (
    <div className="App">

    </div>
  );
}

export default App;
