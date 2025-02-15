class User { 
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encrpytypassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}
const chai = new User("chai", "chai@google.com", "123")
console.log(chai.encrpytypassword());
console.log(chai.changeUsername());

function user(username , email , password){
    this.username = username;
    this.email = email;
    this.password = password;}
user.prototype.encrpytypassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase}abc`
}
const tea = new User("tea", "tea@google.com", "123")
console.log(tea.encrpytypassword());
console.log(tea.changeUsername());