const http = require('http');
const path = require('path');
const fs = require('fs');
const dirpath = path.join(__dirname, 'files');

// Creatint files
for(var i=0;i<10;i++){
    fs.writeFileSync(`${dirpath}/hello${i}.txt`, `Hello I am file number ${i}`);
}

// Getting Files list
fs.readdir(dirpath, (err, files)=>{
    files.forEach((item)=>{
        console.log(item);
    })
})

// Deleting Files
for(var i=0;i<10;i++){
    fs.unlinkSync(`${dirpath}/hello${i}.txt`);
}