let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(typeof myDate);

//let mydate111 = new Date(2023,0,23)
//console.log(mydate111.toDateString());
//let mydate111 = new Date(2023,0,23,5,3)
//console.log(mydate111.toLocaleString());
let mydate111 = new Date("2023-01-14")
console.log(mydate111.toLocaleString());
console.log(mydate111.getTime());
let tiestamp = Date.now();
console.log(tiestamp);
console.log(Math.floor(Date.now()/1000));
let nnewdar = new Date();
console.log(nnewdar);
console.log(nnewdar.getMonth() +1);
console.log(nnewdar.getDay);

// `${newDate.getDa()} and  the time
nnewdar.toLocaleString('default',{
    weekday: "long",
    
})