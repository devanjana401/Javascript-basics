let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = i; j < n; j++) {
        row += " ";
    }
    for (let k = 1; k <= i; k++) {
        row += "* ";
    }
    console.log(row);
}

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = i; j < n; j++) {
//         row += " ";
//     }
//     for (let k = 1; k <= (2 * i - 1); k++) {    (for even --> k<=(2*i) )  
//         row += "*";
//     }
//     console.log(row);
// }
