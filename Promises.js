let a = 10, b = 0;

let waitingData = new Promise((resolve, reject)=>{
    setTimeout(() => {
        //b = 20;
        resolve(20);
    }, 5000);
})

waitingData.then((data)=>{
    b = data;
    console.log(a+b);
})