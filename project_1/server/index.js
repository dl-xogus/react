/* 모듈 */
const express = require('express');     // require(): 객체를 import 하는방법 (서버에서는 import 사용불가)
const bodyParser = require('body-parser');
const cors = require('cors');
/* 파일 */
const todolist = require('./api/todolist.js');
const { connectDB } = require('./db/db_todolist.js');

const app = express();

app.use(cors());

const serverStart = async () => {
    await connectDB();
    // connectDB가 끝날 때까지 밑 코드들을 실행 하지 못하게 await 밑으로 넣어둠
    
    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json());

    app.use('/todo', todolist);     // 주소에 프로젝트 명칭 설정
    /* 
        bodyParser를 먼저 걸고
        /todo 라우터를 걸어야
        bodyParser가 적용된 /todo가 되기 때문에
        라우터보다 먼저 bodyParser를 적용 시켜야 함
    */

    /* 서버 실행 */
    app.listen(4000, () => {
        console.log('Server is running on http://localhost:4000/todo')
    })
};
serverStart();