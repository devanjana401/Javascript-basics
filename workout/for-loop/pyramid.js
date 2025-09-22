let n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";

    // left stars (increase each row)
    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    // spaces in the middle (decrease each row)
    for (let j = 1; j <= 2 * (n - i); j++) {
        row += " ";
    }

    // right stars (mirror of the left)
    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}
