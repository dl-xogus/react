const express = require('express');              // 객체를 import 하는방법 (서버에서는 import 사용불가)
const app = express();
const cors = require('cors');
const todolist = require('./api/todolist.js');   // 확장자 .js는 생략가능
const { connectDB } = require('./db/db_todolist.js');

app.use(cors());

const serverStart = async () => {
    await connectDB();
    // connectDB가 끝날 때까지 밑 코드들을 실행 하지 못하게 await 밑으로 넣어둠
    
    app.use('/todo', todolist);     // 프로젝트 명칭

    /* 서버 실행 */
    app.listen(4000, () => {
        console.log('Server is running on http://localhost:4000/todo')
    })
};
serverStart();