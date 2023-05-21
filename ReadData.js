const dbconnect = require('./mongoDB.js');

// Method 1 Using promise
dbconnect().then((res)=>{
    res.find().toArray().then((data)=>{
        console.log(data);
    })
}) 

// Method 2 Using async and await
const main = async()=>{
    let data = await dbconnect();
    data = await data.find({name:"Sword", brand:'King of Hell Enma'}).toArray();
    console.log(data);
}
main(); 