function setUsername(username) {
    this.username = username;
    console.log("called");
    
    
}
function createuser(username,email, password) {
    setUsername.call(this ,username)
    this.email = email;
    this.password = password;
}
 
const chai =new createuser("chai" , "tushar123gamil", "123" )
console.log(chai);
