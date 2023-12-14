
let counter =0
function calling(){
    counter++
    setTimeout(calling , 1000)
    console.log(`timer ${counter}`)
}
calling()