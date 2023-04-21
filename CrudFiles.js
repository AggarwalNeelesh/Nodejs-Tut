const fs = require('fs');
const path = require('path')
const dirPath = path.join(__dirname, 'files');
const filePath = path.join(dirPath, "abc.txt");
// Creating File
fs.writeFileSync(filePath, "This is a text file creation");
//Reading File
fs.readFile(filePath,"utf-8", (err, context)=>{
    console.log(err, context);
})
//Update File
fs.appendFile(filePath, " Additional Content added", (err)=>{
    if(err)console.log("Error :- ", err);
    else console.log("Content Updated");
})
fs.unlinkSync(filePath);