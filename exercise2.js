// Write a function, testNum, that takes a number as an argument and returns a Promise that tests if the value is less than or greater than 50.

function testNum(num){
    p = new Promise((resolve,reject)=>{
        if(num>50){
            resolve(num + " is greater than 50, success!");
        } else {
            reject(num + " is less than 50, error!");
        }
    })
    return p;
}