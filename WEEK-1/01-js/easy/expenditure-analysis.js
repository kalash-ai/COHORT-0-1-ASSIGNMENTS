/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

// function calculateTotalSpentByCategory(transactions) {
  function calculateTotalSpentByCategory(transactions) {
    let myMap = new Map();
  
    for (let i of transactions) {
      const { category, price } = i;
      if (!myMap.has(category)) {
        myMap.set(category, price);
      } else {
        myMap.set(category, myMap.get(category) + price);
      }
    }
  
    let resultArr = [];
  
    myMap.forEach((value, key) => {
      resultArr.push({ category: key, totalSpent: value });
    });
  
    return resultArr;
  }
  //  for(let i of transactions){
//   const{category, price} =i;
//   if(!myMap.has(category)){
// myMap.set(category, price);
//   }
//   else{
//     myMap.set(category,myMap.get(category) +price)


//   }
//  }
//  let resutarr= []
//  myMap.array.forEach((value,key) => {
//  resutarr.puch({category:key , totalSpent:value}) 
//  });
// return resutarr
//   }


  






















  // for(let i=0;i<transactions.length;i++){
// const category1 = transactions.category[i]
//   // console.log(`${transactions[i].category}`)
//   for(let j=0;j<transactions.length;j++){
//  const price_2 = transactions.price[j]
//     // console.log(`${transactions.price} is the amount spend on the category`)
//   } 
//   // let objoftrans = [{
//   //   category1,
//   //   price_2
//   // }]
//   if(!transactions.category){
//     return transactions.category=0
//   }

//   // console.log()
//   // const currenttrans = transactions[i]
//   // const categ_ofshop = transactions.category
//   // const price_ofshop = transactions.price
  
    
// for(let i =0;i<=transactions;i++){
//   console.log(`This are the transactions ${transactions.price[i]}`)
// }
// return transactions.price[i]
// }
// // Return the array of objects representing each category and its total spending







module.exports = calculateTotalSpentByCategory;
