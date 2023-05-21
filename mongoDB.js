// File for establishing connection with the Database
const {MongoClient} = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function dbconnect(){
    // connect() returns a promise so to handle it we use Await, for using await function should be async
    const result = await client.connect();
    const db = await result.db('e-comm');
    const collection = db.collection('products');
    return collection
}

module.exports = dbconnect;
