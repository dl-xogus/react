const { MongoClient } = require('mongodb');

const uri = "mongodb://xogus:dlxogus3239@ac-lzhwq7z-shard-00-00.jacrmm0.mongodb.net:27017,ac-lzhwq7z-shard-00-01.jacrmm0.mongodb.net:27017,ac-lzhwq7z-shard-00-02.jacrmm0.mongodb.net:27017/?ssl=true&replicaSet=atlas-2wv79r-shard-0&authSource=admin&appName=Cluster0"
const client = new MongoClient(uri);

let db;
const connectDB = async () => {
    try {
        await client.connect();             // 몽고접속
        db = client.db('todolist');         // 프로젝트db 활성화
        console.log('접속완료');
    }
    catch (err) {
        console.error(err);
    }
};

const getDB = () => {
    return db;  
};

module.exports = {connectDB, getDB};