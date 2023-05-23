const express = require('express');
const multer = require('multer');


const app = express();

// Multer is a middleware for storing files
const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, callBack){
            // Name of the folder to upload files
            callBack(null, "Uploads")
        },
        filename: function(req, file,callback){
            var i = file.originalname.lastIndexOf('.');
            // Extension name
            var ext = file.originalname.substring(i);
            // name of the file
            let new_name = file.originalname.substring(0,i)+"-"+ + Date.now() + ext;
            callback(null, new_name);
        }
    })
}).single("user_file");// "user-file" is the form-field inside form parameter in Body of request.

app.use(express.json());
app.post('/upload',upload, (req, res)=>{
    res.send("File Uploaded Successfully");
})


app.listen(5500);