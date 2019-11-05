// *************************
// Write a recursive version of the following function that sum all the elements in an array:

// function sum(array) {
//     let sum = 0;
//     for (const num of array) {
//         sum += num;
//     }
//     return sum;
// }

function sum(array) {
    let sum = 0
    if (array.length > 1) {
        sum = sum + sum(array.length - 1)
    }
    return sum;
}
// ***********************************************
// Undo Recursion Write a non-recursive version of
//  the following function which returns the min element in an array

// function min(array) {
//     if (array.length > 1) {
//         let other = min(array.splice(1));
//         if (other < array[0]) {
//             return other;
//         }
//     } return array[0];
// }

function min(array) {
    let element = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > element) {
            element = array[i];
        }
    }
    return element;
}
// *********************
// Regular Stack
func c
m = 9.5 * 3 = 28.5
// ***************
func b
somethin = -0.5
other = 10
stuff = FUNCTION C IS CALLED with 9.5
// ****************
func A
X = 3 Y = 4
M = X - Y=-1
M = X + Y=7

FUNCTION B IS CALLED

