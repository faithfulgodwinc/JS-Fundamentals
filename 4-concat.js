function concat(one, two) {
    console.log(one + " is " + two);
}

const args = process.argv.slice(2);

concat(args[0], args[1]);
