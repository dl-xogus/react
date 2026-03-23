const express = require('express');     // 객체를 import 하는 방법 (서버에서는 import 사용불가)
const { getDB } = require('../db/db_todolist.js');
const todolist = express.Router();      // 페이지 분할

todolist.get('/', async (req, res) => {
  
  // 실데이터가 들어있는 콜랙션 조회
  const data = await getDB().collection('test').find().toArray();
  res.send(data);
})

module.exports = todolist;              // export 하는 방법