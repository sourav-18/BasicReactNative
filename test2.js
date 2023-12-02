const numbers = [1, 2, 3, 4, 5];

// Calculating the sum of all numbers in the array using reduce
const sum = numbers.reduce((accumulator, currentValue) =>{
    // console.log(accumulator," ",currentValue)
   return accumulator + currentValue;
},[])
let a={};
a["sourav"]="das";

console.log(a)
console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)