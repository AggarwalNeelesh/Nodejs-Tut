const express = require('express');
require('./config-mongoose')
const product = require('./Product-Model')

const app = express();
app.use(express.json());

app.get('/list', async(req, res)=>{
    let data = await product.find();
    res.send(data);
})

app.post('/create', async(req, res)=>{
    let data = new product(req.body);
    let result = await data.save();
    res.send(result);
})

app.put('/update/:_id', async(req, res)=>{
    console.log(req.params);
    let result = await product.updateOne(req.params, {$set:req.body});
    res.send(result);
})

app.delete('/delete/:_id', async(req, res)=>{
    let result = await product.deleteOne(req.params);
    res.send(result);
})
app.listen(5500);