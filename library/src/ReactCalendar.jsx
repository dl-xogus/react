import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function ReactCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Calendar 
        onChange={onChange} 
        value={value} 
        locale="en-US"
      />
    </div>
  );
}

export default ReactCalendar;