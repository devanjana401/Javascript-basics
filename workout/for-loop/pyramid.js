let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = i; j < n; j++) {                
        row += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {      
        row += "";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {      
        row += "*";
    }
    console.log(row);
}
