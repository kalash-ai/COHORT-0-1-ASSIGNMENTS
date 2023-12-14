/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
return new Promise(function(resolve){

    setTimeout(
        async function name()
        {
            resolve()
    // for(let i=0;i<1000;i++){
    
    
    },milliseconds) 
})
    
}

module.exports = sleep;
