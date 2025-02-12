const promiseone =new Promise(function(resolve, reject)  {
    setTimeout(function() {
        console.log('Async task is complete');
         
    }, 1000);
    
})

promiseone.then(function(){
    console.log("promise consumed");

})