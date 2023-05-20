const {MongoClient,ServerApiVersion} = require('mongodb');

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
// console.log(client);
async function getData(){
    console.log("sdsd");
    const result = await client.connect();
    const db = await result.db('e-comm');
    // console.log(1,db);
    console.log("efd");
    const collection = db.collection('products');
    const response = await collection.find().toArray();
    console.log(response);
}
getData();