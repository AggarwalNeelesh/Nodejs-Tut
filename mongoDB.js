const {MongoClient,ServerApiVersion} = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function getData(){
    // connect() returns a promise so to handle it we use Await, for using await function should be async
    const result = await client.connect();
    const db = await result.db('e-comm');
    const collection = db.collection('products');
    const response = await collection.find().toArray();
    console.log(response);
}
getData();