function funm(){
    console.log("a");
    console.log("t");
    console.log("p");
    console.log("o");
    console.log("i");
    console.log("m");
}
//funm()
// function  addnum(num1,num2){
//     console.log(num1+num2);
// }

function  addnum(num1,num2){
    // let  result =num1+num2;
    // return result
    return num1+num2
}

const result=    addnum(3,5)
 console.log("result :",result)//undefine
function login (username){//(username= "man")
    if(username === undefined){//if(!username)
        console.log("please enter a username")
    }
    return `${username} just logged  in`
}

console.log(login("arpit"))
console.log(login())

function calculatecart(val1,val2,...num4){
    return num4
}
console.log(calculatecart(200,40,300,500,2000))

const user ={
    username1 :"Arpit",
    price :199
}
function handleobject(anyobject){
    console.log(`UserName is${anyobject.username1} and price is${anyobject.price}`);
}


//handleobject(user)
handleobject({
    username1:"sam",
    price:200
})

const mynewarray =[20,30,40,50]
function returnsecon(getArray){
    return getArray[1]
}
console.log(returnsecon(mynewarray))


function adone(num5){
    return num5 +1
}
addnum(5)
const addtwo =function(num6){
    return num6 +2
}
addtwo(5)

