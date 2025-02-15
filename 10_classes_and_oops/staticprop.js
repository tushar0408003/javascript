class User {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`username: ${this.username}`);
        
    }
    static createId(){
        return "123"
    }
}
const tushar = new User ("tushar")
tushar.logMe();
console.log(tushar.createId());

class teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}
const iphone = new teacher("iphone ", "iphone @123")
console.log(iphone.createId());
