const coding = ["js", "ruby", "java", "python", "срр"]

/*
coding. forEach( function (val){
console. log(val);
})


coding.forEach((item) =>{
console. log (item) ;
})

function printMe(item){
    console. log (item);
}
 coding. forEach(printMe)

 coding. forEach( (item, index, arr) => {
    console. log(item, index, arr);
    } )
    */


const myCoding =[
    {
LanguageName: "javascript",
languageFileName: "js"
    }
    ,
    {
LanguageName: "javascript",
languageFileName: "js"
    }
    ,
    {
LanguageName: "javascript",
languageFileName: "js"
    },
    {
LanguageName: "javascript",
languageFileName: "js"
    }
    ,
    {
LanguageName: "javascript",
languageFileName: "js"
    }
    ,
    {
LanguageName: "javascript",
languageFileName: "js"
    }
]

myCoding.forEach((item)=>{
    console.log(item.LanguageName)
})