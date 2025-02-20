function fibs(n) {
    let res = [];
    if (i == 0) res.push(0);
    else if (i==1) res.push(1);
    for (let i = 2; i < n; i++) {
        res.push(res[i-1]+res[i-2]);
    }
    return res;
}

// console.log(fibs(0));

function fibsRec(n) {
    console.log("This was printed recursively");

    if (n <= 0) return [];
    else if (n == 1) return [n-1];
    else if (n == 2) return fibsRec(n-1).concat([n-1]);

    let res = fibsRec(n-1);
    let x = res.length;
    res.push(res[x-2]+res[x-1]);
    return res;

}

console.log(fibsRec(8));