const promiseone =new Promise(function(resolve, reject)  {
    setTimeout(function() {
        console.log('Async task is complete');
         resolve()
    }, 1000);
    
})

promiseone.then(function(){
    console.log("promise consumed");

})

new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("promise resolved");
    
})
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "tushar", email : "tushar011@gmail.com"

        })
        
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);
    

})

promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "tushar" ,password: "123"})
        }  else{
            reject('ERROR: went wrong')
        }
    }, 1000);
})
 promiseFour.then((user)=>{
    console.log(user);
    return user.username
    }).catch((error)=>{
     console.log(error);
     
    }).finally(()=>{
        console.log("the promise get resolve or rejected");
        
    })

    promiseFive = new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = true
            if (!error) {
                resolve({ username: "tushar" ,password: "123"})
            }  else{
                reject('ERROR: JS went wrong')
            }
        }, 1000)}
    );
   async function consumedpromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
        
        
    } catch (error) {
        console.log(error);
        
        
    }
    
   }
   consumedpromiseFive()

//    async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//         const data = await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E:", error);
        
//     }
    
//    }
//    getAllUsers()

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error));

