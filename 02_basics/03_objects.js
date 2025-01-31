//singleton
//object,created

//object literals
const mysym =Symbol("key1")

const JsUser = {
    name : "Tushar",
   "full name" : "Tushar Jakhar",
   email : "tusharjakhar001@gmail.com",
   mysym : "mykey1",
    
}
//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mysym])

JsUser.email = "tushar@123"
//Object.freeze(JsUser)
JsUser.email ="tushar1111"
//console.log(JsUser)

JsUser.greetings = function(){
    console.log("hello js user");
}
JsUser.greetingsTwo = function(){
    console.log( 'hello js user', $ [this.name]);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());