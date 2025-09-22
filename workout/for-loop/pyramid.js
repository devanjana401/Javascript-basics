let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = i; j < n; j++) {                // first loop for spaces
        row += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {      // second loop for stars on left
        row += "";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {      // second loop for stars on left
        row += "*";
    }
    console.log(row);
}
