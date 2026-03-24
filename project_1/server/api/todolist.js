const express = require('express');     // 객체를 import 하는 방법 (서버에서는 import 사용불가)
const { getDB } = require('../db/db_todolist.js');
const todolist = express.Router();      // 페이지 분할

/* 가져오기 */
todolist.get('/', async (req, res) => {
  const data = await getDB().collection('todos').find().toArray();   // 실데이터가 들어있는 콜랙션 조회
  res.send(data);
})

/* 저장 */
todolist.post('/', async (req, res) => {
  try {
    /* server에 저장 */
    const result = await getDB().collection('todos').insertOne(req.body);

    /* front에 보내줄 값 */
    const data = { ...req.body, _id: result.insertedId };
    res.send({ success: true, data });
  }
  catch (err) {
    res.send({ success: false, msg: err.message });
  }
})

module.exports = todolist;              // export 하는 방법