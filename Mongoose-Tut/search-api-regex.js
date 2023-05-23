const express = require('express');
require('./config-mongoose')
const product = require('./Product-Model')

const app = express();
app.use(express.json());
// console.log("vccxc")
app.get('/search/:key', async(req, res)=>{
    let data = await product.find(
        {
            "$or":[
                {"name": {$regex:req.params.key}},
                {"brand": {$regex:req.params.key}},
            ]
        }
    );
    console.log(req.params);
    // let data = await product.find();
    res.send(data);
})


app.listen(5500);