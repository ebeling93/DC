// PALINDROME - INCOMPLETE
function ifPalindrome(str) {
    const arrayValues = string.split('');

    const reverseArrayValues = arrayValues.reverse();

    const reverseString = reverseArrayValues.join('');

    if (string == reverseString) {
        console.log('Palindrome');
    
    }
    else {
        console.log('Not a palindrome');
    }
    
}


// DUPLICATES
let friends = ["Alex", "Leah", "Sam", "Alex"]
console.log(friends)
let deleteItem = friends.pop()
console.log(friends)

// TRUE/FALSE - INCOMPLETE
const fruits = ["cherry", "orange", "strawberry", "apple"];
 

// LARGEST NUMBER
var array = [3, 7, 12, 6, 21, 17]
var largest = array[0];

for (index=0; index<=largest;index++){
    if (array[index]>largest)  {
        largest=array[index];
    }
    console.log(largest)
}

// SMALLEST NUMBER
var array = [4, 89, 21, 13, 9, 43]
var smallest = array[0];

for (index=0; index<=smallest;index++) {
    if (array[index]>smallest) {
        smallest=array[index];
    
    }
    console.log(smallest)
}

// FIZZBUZZ (?)
number = 15
        if(number % 5 === 0 && number % 3 === 0){
            console.log("fizzbuzz")

        }
        else if(number % 3 === 0){
            console.log("fizz")
        }
        else if(number % 5 === 0){
            console.log("buzz")
        }
        else {
            console.log(number)
        }
 
// EVEN or ODD
number = 10
if(number % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
