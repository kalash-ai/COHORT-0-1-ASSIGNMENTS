/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  const newstr = str1.toLowerCase().split('').sort()
  const newstr1 = str2.toLowerCase().split('').sort()
  const finalstr = newstr.join('')
  const finalstr2 = newstr1.join('')
  
  if(finalstr ==finalstr2){
    return true
  }
  else{
    return false
  }
}


// another logic (TC is not followed)


// const newstr = str1.toLowerCase()
// const newstr2 = str2.toLowerCase()
// let split1 = newstr.split('') //convert the str to an array 
// let split2 = newstr2.split('') 
// let sorted_str = split1.sort() // sorts the array on the basis of which consonants or vowels comes first
// let sorted_str2 = split2.sort()
// let final_str1 = sorted_str.join('')
// let final_str2 = sorted_str2.join('')

module.exports = isAnagram;
