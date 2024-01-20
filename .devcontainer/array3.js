
********************************

//array
const myarr = [0,1,2,3,4,5]
const myhero = ["arpit","arg"]
const myarr2 = new Array(1,2,3,4)
console.log(myarr[1]);

//array method

myarr.push(6)
myarr.push(7)
myarr.pop()
myarr.unshift(9)
myarr.shift()
console.log(myarr);

console.log(myarr.includes(9));
console.log(myarr.indexOf(3));

const newArr1 = myarr.join()
console.log(myarr);
console.log(typeof newArr1);

//slice vs splice
console.log("a",myarr);
const  myn1 = myarr.slice(1,3)
console.log(myn1);
console.log("b",myarr);
const  myn2 = myarr.splice(1,3)
console.log(myn2);
console.log("c",myarr);
console.log(myn2);







