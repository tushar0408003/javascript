const myNUM = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const myNewNm = myNUM.filter( (num) => {
//    return num > 4;
// } )

 //console.log(myNewNm);

const NewNum = []
myNUM.forEach( (num) =>{
    if (num > 4) {
        NewNum.push(num)
    }

})
console.log(NewNum);



