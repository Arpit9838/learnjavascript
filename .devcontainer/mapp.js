const myNumers = [11, 2, 3, 4, 5, 6, 7, 8, 9, 101]
// const newNums = myNumers.map ( (num) => num + 10)
// console. log (newNums) ;

const newNums = myNumers
.map ( (num)=>num * 10)
.map ( (num)=>num + 1)
.filter((num)=>num >= 40)
console. log(newNums) ;





