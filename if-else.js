
// Boolean forced
var yes = true;
var no = false;

// Boolean from comparison
var isTrue = (5 == 5);
var isUnderage = (40 >= 18);
var isPositiveNumber = (-123 > -1);
var isMultipleOfThree = ((33 % 3) == 0);

if (isTrue) {
    console.log('true!')
}

if (! isTrue) {
    console.log('not true, false!')
}

// Zero length string interpreted as false

if ("") {
    console.log('You say nothing');
}

// Any string with at least 1 character, interpreted as true

if (" ") {
    console.log('You say nothing');
}

// NULL is interpreted as a false

if (null) {
    console.log('Null is not true')
}
else {
    console.log('Null is like false')
}

// Empty array is interpreted as false

if ([]) {
    console.log('Empty array is like true')
}
else {
    console.log('Empty array is like false')
}

// Empty object is interpreted as false
if ({}) {
    console.log('Empty object is like false')
}
else {
    console.log('Empty object is like false')
}
