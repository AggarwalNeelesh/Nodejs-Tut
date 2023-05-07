// creating Filter
module.exports.reqFilter = function (req, res, next){
    if(req.query.age==null){
        res.send("Please Specify the age");
    }else if(req.query.age<18){
        res.send("You are underage baby!!");
    }else{
        next();
    }
}