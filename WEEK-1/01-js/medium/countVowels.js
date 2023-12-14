/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  

  if (str.length == 0) {
    console.log("no vowels found");
    return 0;
  }
  // Your code here
  let vowels_instr = str.toLowerCase().split('');
  let vowelsof_str = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < vowels_instr.length; i++) {
    if (vowelsof_str.includes(vowels_instr[i])) {
      count++;
    }
  }
  if (count === 0) {
    return 0
    // return console.log("No vowels found");
  }
    return count;
  }

module.exports = countVowels;


/*
   if (str.length === 0) {
        console.log('No vowels found');
        return 0;
    }

    let vowels_instr = str.toLowerCase().split('');
    let vowelsof_str = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < vowels_instr.length; i++) {
        if (vowelsof_str.includes(vowels_instr[i])) {
            count++;
        }
    }

    if (count === 0) {
        console.log('No vowels found');
    }

    return count;
} */