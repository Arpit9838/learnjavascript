const promiseOne = new Promise(function(resolve,reject  ){
//Do an async task
// DB calls, cryptography, network
setTimeout(function(){
    console.log('Async task is Computer');
    resolve()
},1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async task 2 resolve")
})

const promisethree =new Promise(function(resolve,reject){
setTimeout(function(){
    resolve({username:"Arpit",email: "arpit@gmail.com"
})
},1000)
})
promisethree.then(function(user){
    console.log(user)
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"Arp",poaaword:"123"})
        }
        else{
            reject('error :Somthing went wrong')
        }
    },1000)
})

promisefour.then((user)=>{
    console.log(user);
    return user.username
})
.then((myusername)=>{
console.log(myusername);
})
.catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("resolve or rejected");
})

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"Arp",poaaword:"123"})
        }
        else{
            reject('error :promise went wrong')
        }
    },1000)
})

async function consumedproomisefive(){
    try{
    const response = await promisefive
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumedproomisefive()

// async function getAlluser(){
//     try{
//     const response1 = await fetch ('https://jsonplaceholder.typicode.com/users')
//     const data = await response1.json()
//     console.log(data);
//     }
//     catch(error){
//         console.log("E :",error);
//     }
// }
// getAlluser()

fetch ('https://jsonplaceholder.typicode.com/users').then((response)=>
{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
}
)