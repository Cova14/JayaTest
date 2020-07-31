const pyramid = [
    [1], //Upper
    [2, 3], //Upper
    [2, 3, 4], //Lower
    [2, 3], //Lower
    [1], //Lower
];

// This is a second pyramid I added to test the result
// Expected output of this is -308
const pyra2 = [
    [6, 7],
    [11, 3, 12],
    [15, -3, 2, 8],
    [2, 3, 4, 5, 6, 7],
    [1, 8, 8, 9, 7],
    [2, 2, 2, 2],
];

function sumPyramid(pyramid){

    // let upper = 1, lower = 1, isLower = false
    // Changin how we declare the variables
    // Adding 'next' variable due to starting value being 1 as well
    let next = 1, isLower = false;

    // Declaring variables to store the sums of the upper and lower sides
    let upSide, downSide = [];

    // using for to walk through the pyramid arrays
    for (let i = 0; i < pyramid.length; i++) {

        //Adding validation to avoid error where pyramid[next].lenght is undefined, due to next being 5
        //We have 5 values on the varible
        if(next < pyramid.length) {
            // Validating if the next array on our pyramid is longer than the current one
            // Changing the value of isLower based on that
            // I'm using ternary operators to make code smaller and cuter uwu
            pyramid[i].length > pyramid[next].length ? isLower = true : isLower = false;
        }

        // If 'isLower' is true, we gonna push the sum of the arrays in the current value of i to the downSide array
        // If not, we push the sum to the upside array
        // For example, if the current value of i is 1, the values of pyramid would be [2, 3]
        // Due to the previous comparison we know this array is lower side, so we call the function 'sumArr' which returns the sum of the values we send
        // In this case would be 2 + 3 = 5, being '5' the value we recieve from the function and we push this sum into the downSide array
        isLower ? downSide.push(sumArr(pyramid[i])) : upSide.push(sumArr(pyramid[i]));

        // I'm, using the variable next as an id for the pyramid array
        // So i can compare the current array with the next one
        // I.E: if the value of 'i' is 1, the value of 'next' would be 2
        next += 1;
    };

    // We call the function prodArr to get the product (multiplication) of the values we already push into the upside and downside arrays
    // And make this product the value of upper and lower
    const upper = prodArr(upSide);
    const lower = prodArr(downSide);

    // We return the difference of the upper and lower side
    return lower-upper;
}

// This function returns the sum of all the values we pass to it in an array
function sumArr(values){
    let sum = 0;
    for (let value of values) {
        sum += value;
    }
    return sum;
    // return arr
}

// Created a new function to multiply the values of the lower or upper side sums
function prodArr(values) {
    let prod = 1;
    for (let value of values) {
        prod *= value;
    }
    return prod;
}

// logging on console the result of the whole flow
console.log(sumPyramid(pyra2));