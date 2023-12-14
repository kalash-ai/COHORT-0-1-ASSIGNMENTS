let fs = require("fs")

//  fs.readFile("a.txt", "utf-8" , function(err, data){
//     if(err){
//         console.log("this file content some error")
//     }
//     console.log(data)
    
//  })
 let newcontent  = "Hello folks"
 fs.appendFile("a.txt", newcontent , function(err){
    if(err){
        console.log(err)
    }
    console.log("the file has been written")
 })