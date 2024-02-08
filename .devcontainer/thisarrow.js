const user1 ={
    username:"arpit",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to Message`);
       // console.log(this)
    }
}
//user1.welcomeMessage()
//user1.username ="sam" 
//user1.welcomeMessage()
console.log(this)
/*
function chai(){
    let user22 ="arpit"
    console.log(this.user22);
}
chai()

const chai =  function (){
    let user22 ="arpit"
    console.log(this.user22);
}
chai()


const chai =   () =>{
    let user22 ="arpit"
    console.log(this.user22);
    console.log(this);
}
chai()
*/
/*
const addtwo1 =(num1,num2)=>{
    return num1+num2
}*/

//const addtwo1 =(num1,num2)=> num1+num2

//const addtwo1 =(num1,num2)=> (num1+num2)

const addtwo1 =(num1,num2)=> ({uusername:"arpit"})
console.log(addtwo1(3,5))


