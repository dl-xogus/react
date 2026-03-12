/* Test.js */
import logo from './logo.svg';
import './App.css';
let name = "홍길동";

/* 기존의 class가 아닌 className으로 사용 */
/* 중 괄호를 이용해 변수를 넣을 수 있음 */
function Test() {
  return (
    <div className="App">
      1. node.js 설치 <br/>
      2. 스크립트 실행정책 변경 (set-executionpolicy remotesigned) <br/>
      3. react 폴더 생성 <br/>
      ㄴ npm i -g create-react-app <br/>
      4. npx create-react-app tutorial (튜토리얼 프로젝트 생성) <br/>
      5. cd tutorial (폴더 진입) <br/>
      6. npm start (실시간 미리보기) <br/>
    </div>
  );
}

export default Test;