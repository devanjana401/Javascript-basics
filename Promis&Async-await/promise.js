//Promise in js is an object that representing ivential completion( or failure) of an asynchronous operation and it's result in values.

// const promise = new Promise((resolve,reject) => {
//     synchronous operation code
// })

//Resolve is a value -- called when the operation is successful
//Reject is a error  -- called when the operation is failed

//creating promise
let myPromise = new Promise((resolve,reject) => {
    let success = true;
    setTimeout(() => {    //used for delay(timeout)
        if(success){
            resolve("Promise resolved successfully")
        }
        else{
            reject("Promise rejected")
        }
    },2000)
})
myPromise
    .then(result => console.log(result))  //runs if promise is resolved
    .catch(error => console.log(error))   //runs if promise is rejected
    .finally(() => console.log("Promise execution finished!"))

