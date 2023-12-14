
let startTime =new Date().getTime() 
// let starttime1= new Date().getTime()
let fs = require('fs');
fs.readFile("a.txt" , "utf-8" , function(err, data){
  if(err){
    console.log(err)
  }
  console.log(data) 
  let count =0
  let endtime1 = new Date().getTime()
   let totaltime1 =(endtime1 -startTime)/1000
  console.log(`Total time while reading the file ${totaltime1}`)

for(let i=0;i<=10000000000;i++){
    count = count +i
}
    // console.log(data)
})
let endtime = new Date().getTime()
let totalTime = (endtime-startTime)/1000
console.log(`Total time Taken in the whole program ${totalTime}`)


