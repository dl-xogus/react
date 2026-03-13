import './App.css';
import axios from 'axios'

function App() {
  /* 데이터 호출 */
  function get() {
    /* .get() : 주소에서 데이터를 받아옴 */
    axios.get('http://localhost:3001/works')
      .then(res => {
        console.log(res.data);
      });
  }

  /* 데이터 제거 */
  function del() {
    /* .delete() : 제거할 id값을 주소 뒤에 적어 제거 */
    axios.delete('http://localhost:3001/works/73c3')
      .then(res => {
        console.log(res.data);
      });
  }

  /* 데이터 추가 */
  function post() {
    /* .post() : 추가할 값을 뒤에 적어 추가 */
    axios.post('http://localhost:3001/works', { "name": "이훈이" })
      .then(res => {
        console.log(res.data);
      });
  }

  /* 데이터 수정 */
  function put() {
    /* .put() : 수정할 id값을 주소 뒤에 적고 수정할 값을 뒤에 적어 수정 */
    axios.put('http://localhost:3001/works/dcca', { "name": "맹구" })
      .then(res => {
        console.log(res.data);
      });
  }

  return (
    <div className="App">
      <textarea defaultValue={`
        1) 모듈설치 (npm i json-server axios)
        
        2) CRUD 예제(읽고, 쓰고, 수정, 삭제)

        function get() {
          axios.get('http://localhost:3001/works')
            .then(res => {
              console.log(res.data);
            });
        }
      
        function del() {
          axios.delete('http://localhost:3001/works/73c3')
            .then(res => {
              console.log(res.data);
            });
        }
      
        function post() {
          axios.post('http://localhost:3001/works', { "name": "이훈이" })
            .then(res => {
              console.log(res.data);
            });
        }
      
        function put() {
          axios.put('http://localhost:3001/works/dcca', { "name": "맹구" })
            .then(res => {
              console.log(res.data);
            });
        }
      `} cols="100" rows="100"></textarea>
    </div>
  );
}

export default App;
