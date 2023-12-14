/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '')
  let newStrReversed = newStr.split('').reverse().join('');
  
  
  if(newStr == newStrReversed){
    return true
  }
  else{
    return false
  }
  // let finalstr = newStr.join('')


}

// Time complexity is not FOLLOWED
// Ignore the following code
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // let newstr =  str.replace(/[^a-z0-9]/gi, '').toLowerCase()
  // let newStrReversed = newstr.split('').reverse().join()
  // let arrangedstr = newStrReversed
  // if(arrangedstr == newstr){
  //   return true

  // } 
  // else{
  //   return false
  // } 

module.exports = isPalindrome;



// function countVowels(str) {
//   str1 = str.toLowerCase();
//   let vowelCount = 0;
//   for (let i = 0; i < str1.length; i++) {
//     console.log(str1[i]);
//     if(str1[i] === 'a' || str1[i] === 'e' || str1[i] === 'i'|| str1[i] === 'o'|| str1[i] === 'u');
//     vowelCount++;
//   }
//   return vowelCount;
// }
