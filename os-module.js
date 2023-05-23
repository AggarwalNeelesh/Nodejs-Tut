const os = require('os');
console.log("Architecture :- ",os.arch());
console.log("Free Ram Memory :- ",os.freemem()/(1024*1024*1024),"GB");
console.log("Hostname :- ",os.hostname());
console.log("Platform :- ",os.platform());
console.log("User Information :- ",os.userInfo());