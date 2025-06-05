const arg = procsss.argv[2];
const x = Number(arg);

if (!Number.isInteger(x)) {
    console.log("Missing number of occurences");
} else {
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}

