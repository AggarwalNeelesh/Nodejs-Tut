const express = require('express');


const app = express();
// creating Filter
const reqFilter = (req, res, next)=>{
    if(req.query.age==null){
        res.send("Please Specify the age");
    }else if(req.query.age<18){
        res.send("You are underage baby!!");
    }else{
        next();
    }
}
const reqFilter2 = (req, res, next)=>{
    if(req.query.age==null){
        res.send("Please Specify the age");
    }else if(req.query.age<30){
        res.send("You are underage baby!!");
    }else{
        next();
    }
}
// Applying filter on app
app.use(reqFilter);
app.use(reqFilter2);

app.get('/', (req, res)=>{
    res.send("Welcome boii !")
})

app.listen(8077);