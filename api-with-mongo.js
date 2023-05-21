const express = require('express');
const dbconnect = require('./mongoDB');
const mongodb = require('mongodb');

const app = express();
app.use(express.json());

// GET API
app.get('/', async(req, res)=>{
    let data = await dbconnect();
    let result = await data.find().toArray();
    res.send(result);
})


// POST API
app.post('/', async(req, res)=>{
    console.log(req.body);
    let data = await dbconnect();
    let result = await data.insertOne(req.body);
    res.send(result);
})

// PUT API
app.put('/', async(req, res)=>{
    console.log(req.body);
    let data = await dbconnect();
    let result = await data.updateMany({name: req.body.name}, {$set:req.body});
    res.send(result);
})

// DELETE API
app.delete("/:id", async(req, res)=>{
    // API call :- localhost:5500/646a781ab54592821c25a752
    let data = await dbconnect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    // For other such as name
    //let result = await data.deleteOne({name: req.params.name});
    res.send(result);
})
app.listen(5500);