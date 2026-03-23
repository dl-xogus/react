import axios from 'axios'
import { useState } from 'react';

import './App.css'

function App() {

  axios.get('http://localhost:4000/todo')
    .then(res => {
      console.log(res.data);
    });

  return (
    <div className="App">

    </div>
  );
}

export default App;