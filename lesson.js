const message = 'Hello Node!';

if(true === true) {
    const message = 'Hello ES6!';
    let sum = 5;
    sum += 10;
    console.log(message);
    console.log(sum);
}

console.log(message);
// console.log(sum);

//var is function-scoped, so redeclaring it in a block will cause its value outside the block to change as well:
var one = 'one: delcared outside the block';

if (true === true) {
    var one = 'one:delcared inside the block'; //notice we redeclare 'one' here
    console.log(one); //prints 'one declared nside the block'
}

console.log(one); //also prints 'one: declared inside the block', because the variable was redeclared in the 'if' block. The outer 'var' variable was therefore destroyed and replaced by inner var variable.

//'let' is block-scoped, so redeclaring a 'let' variable inside of a block creates a different 'let' variable with the same name whose scope is inside the block:

let two = 'two: declared outside the block';

if(true === true){
    let two = 'two: declared inside the block';
    console.log(two); //prints 'two: declared inside the block'
}

console.log(two); //prints 'two: declared outside the block', because two declared inside the block is a separate variable. The 'let' variables are unrelated and therefore are unaffected by each other.

//var is function-scoped, so changing its value in a blcok causes its value in the outer environment to change as well:

var three = 'three: declared outside the block';

if (true === true) {
    three = 'three: changed inside the block'; //notice: we don't redeclare
    console.log(three); //prints 'three: changed inside the block'
}

console.log(three); //also prints 'three: changed inside the block', because the variable has function scope. this means that the value change in the block is reflected throughout the function, i.e., outside the block.

//let is blocked-scoped, so changing its value in a block does change its value outside the block_if_ the variable is not redeclared in the block:

let four = 'four: outside the block';

if(true === true) {
    four = 'four: inside the block'; //notice: we don't redeclare the variable
    console.log(four); //prints 'four: inside the block'
}

console.log(four); //prints 'four: inside the block', because we didn't redeclare the variable inside the block. That meant we referenced the variable outside the block, and we therefore changed it.
