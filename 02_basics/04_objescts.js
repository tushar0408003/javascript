//const tinderUser = new Object()

const tinderUser ={}
tinderUser.id = "123"
tinderUser.email ="G@gmail.com"



console.log(tinderUser.fullname);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('email'));



const regularUser ={
    email:"tushar@123",
    fullname: {
        userfullname:{
            firstname: "tushar",
            lastname: "jakhar"
            
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname);