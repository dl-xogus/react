const express = require('express');     // 객체를 import 하는 방법 (서버에서는 import 사용불가)
const { getDB } = require('../db/db_todolist.js');
const { ObjectId } = require('mongodb');
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

/* 삭제 */
todolist.delete('/', async (req, res) => {
  const { id } = req.query;   // 삭제할 object의 _id 값

  try {
    /* server에서 삭제 */
    const result = await getDB().collection('todos').deleteOne({ _id: new ObjectId(id) });
    // MongoDB에 ObjectId()로 _id가 저장되어있기 때문에 id를 _id: new ObjectId(id)로 넣어줘야 함

    res.send({ success: true });
  }
  catch (err) {
    res.send({ success: false, msg: err.message });
  }
})

/* 수정 */
todolist.put('/state', async (req, res) => {
  const { id } = req.query;

  try {
    const result = await getDB().collection('todos').updateOne({ _id: new ObjectId(id) }, { $set: req.body });
    res.send({ success: true });
  }
  catch (err) {
    res.send({ success: false, msg: err.message });
  }
})

module.exports = todolist;              // export 하는 방법