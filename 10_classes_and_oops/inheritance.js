class User {
    constructor(username) {
        this.username = username;
    }
    logMe(){
        console.log(`username is ${this.username}`);
        
    }
}
class teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }
    addcourses(){
        console.log(`A course was add ${this.username}`);
        
    }
}
const chai = new teacher("chai ", "chai@ ", "123")
chai.addcourses();
const tushar = new User("chai ", "chai@ ", "123")
tushar.logMe();
console.log(chai === tushar);
console.log(chai instanceof User);

