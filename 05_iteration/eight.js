const myNum = [1, 2, 3, 4, 5]
// const myNewNum = myNum.reduce( function (acc , currval){
//     console.log(`acc: ${acc} and currval : ${currval}`);
    
//     return acc + currval;
// }, 0)
const myNewNum = myNum.reduce( (acc , currval) => acc+ currval,0)


console.log(myNewNum);
