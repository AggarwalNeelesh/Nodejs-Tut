const dbconnect = require('./mongoDB.js');

// Method 1 Using promise
// dbconnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// }) 

// Method 2 Using async and await
const read = async()=>{
    // "data" is collection in database
    let data = await dbconnect();
    data = await data.find({name:"Sword", brand:'King of Hell Enma'}).toArray();
    console.log(data);
}

const insert = async()=>{
    let data = await dbconnect();
    let result = await data.insertOne({name:"Straw Hat", price:"$2.5 Million", brand:"Mugiwara"});
    console.log(result.acknowledged);
}
const update = async()=>{
    let data = await dbconnect();
    let result = await data.updateOne({name:"Straw Hat"}, {$set:{price:"$3 Billion"}})
    console.log(result.acknowledged);
}
const deleteRecord= async()=>{
    let data = await dbconnect();
    let result  = await data.deleteOne({name: "Straw Hat"});
    console.log(result.acknowledged);
}
deleteRecord();