function addTwoNmuber(num1, num2){

   let result = num1 + num2;
    return result;

}
const result = addTwoNmuber(2 ,3);
console.log("Result:", result);
console.log(result);

const myNewArray = [ 200, 300, 400]

function returnValue(getArray){
    return getArray[1];
}
console.log(returnValue(myNewArray));
console.log(returnValue([ 200, 300, 400]));