//In how many ways can we loop in an array describe each with an example ?

  // Answer:   6 different ways to loop through an array in JavaScript (with examples)



//   1. for loop
//   2. while loop
//   3. do while 
//   4. Map
//   5. for each 
//   6. of loop


//  // 1. for Loop
// The basic for loop has the following syntax:

// for (initialization; condition; update statement) {
//     // code block to be executed
// }
// Example of using for loop:

var myArray = [
    {id: 1, name: 'Sham', age: 12},
    {id: 2, name: 'Kiran', age: 14},
    {id: 3, name: 'Sai', age: 13},
    {id: 4, name: 'Karthik', age: 17},
    {id: 5, name: 'Lovely', age: 11}
];

for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i].name);
}
console.log(myArray);
console.log('-----------');



// 2. for/of Loop
// The for/of loop has the following syntax:

// for (variable of iterator) {
//     // code block to be executed
// }

// Example of using for/of loop


var myArray = [
    {id: 1, name: 'Jai', age: 10},
    {id: 2, name: 'Ram', age: 12},
    {id: 3, name: 'Charan', age: 19},
    {id: 4, name: 'Tarun', age: 27},
    {id: 5, name: 'Prabas', age: 30}
];

for (let profile of myArray) {
    console.log(profile.name)
}
console.log(myArray);
console.log('-----------');


// 3. while Loop
// The basic while loop has the following syntax:

// while (condition) {
//     // code block to be executed
// }

// Example of using while loop



var myArray = [
    {id: 1, name: 'Jyothi', age: 12},
    {id: 2, name: 'Laxmi', age: 14},
    {id: 3, name: 'Jaya', age: 13},
    {id: 4, name: 'Siri', age: 17},
    {id: 5, name: 'Lilly', age: 11}
];

var i = 0;
while(i < myArray.length) {
    console.log(myArray[i].name)
    i++
}
console.log(myArray)

console.log('-----------')

// 4. do/while Loop


// exapmle prograam
var myArray = [
    {id: 1, name: 'Rani', age: 12},
    {id: 2, name: 'Ravi', age: 14},
    {id: 3, name: 'Raju', age: 13},
    {id: 4, name: 'Rama', age: 17},
    {id: 5, name: 'Radha', age: 11}
];

var i = 0;
do {
    console.log(myArray[i].array)
    i++
} while(i < myArray.length)

console.log(myArray);
console.log('-----------')
//by using this approach we can also example other method like Map(), etc.
