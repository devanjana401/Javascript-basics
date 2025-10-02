//Async-await is a syntactic sugar built on top of promise
//It makes asynchronous code looks and behaves like synchronous
//More readable and maintainable
//async marks a function,that will return a promise
//await pauses the function execution untill a promise is resolved(or rejected)

// async function Hello() {    (function declaration)
// }

// const sayHello = async function () {    (function expression)
// }

// const sayBye = async (params) => {      (arrow function)
// }



// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data Loaded!")
//         }, 2000)
//     })
// }

// async function getData() {
//     console.log("start");

//     const result = await fetchData();
//     console.log(result);

//     console.log("end");
// }
// getData();



//using try-catch
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded!")
        }, 2000)
    })
}

async function getData() {
    try {
        console.log("start");

        const result = await fetchData();
        console.log(result);

        console.log("end");
    }
    catch(error) {
        console.log(error);
        
    }
    
}
getData();