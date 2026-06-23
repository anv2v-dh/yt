//#1
let myBoolean = true;
console.log(myBoolean)

//#2
let myString = 'Hello Word';
console.log(myString)

//#3
let firstNumber = 20;
console.log(firstNumber)

//#4
let secondNumber = 40;
console.log(secondNumber)

//#5
secondNumber = 80;
console.log(secondNumber)

//#6
let myArray = [myBoolean, myString];
console.log(myArray)

//#7
let sum = firstNumber + secondNumber ; 
let myObject = {firstProperty : myArray, sumProperty : sum}

//#8
console.log(myObject)

//#9
console.log(myObject.sumProperty)

//#10
console.log(myObject.firstProperty[1])
