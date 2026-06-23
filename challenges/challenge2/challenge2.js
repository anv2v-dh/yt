//#1
let numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);

//#2
const firstNumber = 20;
const secondNumber = 20;
const result = firstNumber === secondNumber;
console. log(result);

//#3
const expression5 = !((((100 % 50) < (100 / 50)) && (300 + 5)) === 305);
console.log(expression5);

//#4
const myObj = {
    prop1: 'first Value',
    prop2: 20
};
const myArray = [40, 50, 2];
const result1 = myObj.prop2 === (myArray[0]/myArray[2]);
console.log (result1);

//#5
const myObj2 = {
    nestedObject1: {
        price:100,
        quantity:5
    },
    nestedObject2: {
        price:150,
        quantity:2
    }
};
const myArray2 = [myObj2.nestedObject1, myObj2.nestedObject2];
const result2 = 
(myArray2[0].price * myArray2[0].quantity) > (myArray[1].price * myArray[1].quantity);
console.log(result2);
//true

