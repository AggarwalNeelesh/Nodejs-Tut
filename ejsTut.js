const express = require('express');
const path = require('path')


const app  = express()
const data = {
    name:"Neelesh",
    age:22,
    status:"King"
}
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.get('/', (req, res)=>{
    res.render('profile', {data});
    // res.send("Hello")
})

app.listen(5500);