
***************************
//singleton is made by construct
//object literal
//Object.create
const mySym = Symbol("key1")

const user  = {
    [mySym]:"mykey1",
    name :"Arpit",
    age :18,
    loc:"up",
    email:"arpt@gmail.com",
    last:["Mon","SAt"],
    "fll":"arp",
    "aa a":"ooo"//if we give space then we can access by [] only
}
/*console.log(user.email)
console.log(user["email"])
console.log(user.fll)
console.log(user["aa a"])
//console.log(typeof user.mySym)
user.email ="awer@gmail.com"
Object.freeze(user)
user.email ="arpit@gmail.com"
console.log(user);*/
/*
user.greeting=function(){
    console.log("hello js");
}

user.greetingtwo=function(){
    console.log(`hello js  user, ${this.name}`);
}

console.log(user.greeting);*/

//const  tinderUser=new Object()

const tinderUser ={}

tinderUser.id ="133abc"
tinderUser.name ="arpit"
tinderUser.loggg =   false
/*
console.log(tinderUser);*/

const regular ={
    email:"somme@.com",
    fullname:{
        userfullname:{
            firstname:"Arpit",
            lastname:"ms"
        }
    }
}
/*
console.log(regular.fullname.userfullname.firstname)
 
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

//const obj3 ={obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 ={...obj1,...obj2}

console.log(obj3)
const usatabase =[
    {
        id:1,
        email:"arep@gmail.com"
    },
    {
        id:1,
        email:"arep@gmail.com"
    }
    ,  {
        id:1,
        email:"arep@gmail.com"
    }
]

usatabase[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('loggg'))*/
const course ={
    namecor :"js",
    price:"100",
    instructor:"arpit"
}
//course.instructor
const {instructor}=course
console.log(instructor);
const {instructor:inss}=course//destructure
console.log(inss);
//api
/*{
    "name":"arpit",
    "coursename":"js",
    "price":"free"
}
[{
}
,
{},{}]
*/