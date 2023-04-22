const express = require('express')
// Making express executable
const app = express()

app.get('', (req, res)=>{
    res.send("This is Home Page");
})

app.get('/anime', (req, res)=>{
    res.send("This is Anime Fan page");
})
app.get('/help', (req, res)=>{
    console.log(req.query)
    res.send("This is Help page : Query = "+req.query);
})
app.listen('8080');