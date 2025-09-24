let n=5;
for (let i = 0; i <= 5; i++) {
    let row = "";
    for (let j = 5; j > i; j--) {
        row += " ";
    }
    for (let k = 1; k <= i; k++) {
        row += "*";
    }
    console.log(row);
}


// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j--) {
//         row += "*";
//     }
//     for (let j = 1; j <= 2 * (n - i); j++) {
//         row += " ";
//     }
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }
