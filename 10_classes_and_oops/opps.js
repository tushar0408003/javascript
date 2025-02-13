function user(username, LoggedInCount , ISLoggedIn) {
    this.username = username;
    this.LoggedInCount = LoggedInCount;
    this.ISLoggedIn = ISLoggedIn;

    return this;
}
userOne = new user("tushar" , 12 , true)
userTwo = new user("jakhar ", 33 ,false)
console.log(userOne);
console.log(userTwo);

