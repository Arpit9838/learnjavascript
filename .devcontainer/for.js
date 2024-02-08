const myobject1 = {
    js: 'javascript',
    cpp: 'C++',
    Ib: "ruby",
    swift: "swift by apple"
}
/*
for(const key in myobject) {
console.log(key);
}*/
/*
for (const key in myobject1) {
    console. log(`${key} shortcut is for ${myobject1[key]}`);}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
console. log(key) ;
console. log(programming[key])
}
*/


const map = new Map ()
map. set ('USA' , "unit","United States of America")
map.set ('Fr',"France")
map. set ('IN', "India")

//console. log (map) ;
for(const key in map) {
console. log(key);
}