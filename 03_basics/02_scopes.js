let a = 300

if(true){
    let a =10
    const b = 20
    console.log(a);
    //c = 10
}
console.log(a);

if(true){
    const usernmame ="tushar"
    if(usernmame === "tushar"){
        const websites ="yt";
        console.log( websites  );
        console.log(usernmame);
    }
   // console.log(websites);
}
//console.log(usernmame);


console.log(addone(5))

function addone(num){
    return num +1;
}

//addTwoNmuber(5)
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(5));