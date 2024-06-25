
//1. Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
function calculateSum(a, b) {
    return a + b;
}

const result = calculateSum(8, 9);
console.log(result);


//2. Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
function isEven(number) {
    return number % 4 === 0;
}

console.log(isEven(40));
console.log(isEven(65));


//3. Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
function findMax(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty");
    }
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
console.log(findMax([25, 6, 18, 58, -10]));


//4. Write a function named ‘reverseString’ that takes a string and returns the string reversed.
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Jasim Uddin"));


//5. Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
function filterOddNumbers(numbers) {
	return numbers.filter(function(num) {
	return num % 2 !== 0;
        });
        }
console.log(filterOddNumbers([10, 15, 20, 25, 30, 45, 99]));

//6. Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
function sumArray(arr) {
	let sum = 0;
	for (let num of arr) {
	sum += num;
    }
return sum;
}

// Example 1:
let array1 = [1, 2, 3, 4, 5];
console.log(sumArray(array1));

// Example 2:
let array2 = [-10, 5, 3, 7];
console.log(sumArray(array2));


//7. Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
function sortArray(arr) {
	let sortedArray = arr.slice();
    
	sortedArray.sort(function(a, b) {
	return a - b;
    });
    return sortedArray;
}
let array = [5, 9, 4, -2, -18];
console.log(sortArray(array));


// 8. Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. 
function capitalizeFirstLetter(str) {
    if (!str) {
       return str;
   }
   
   return str.charAt(0).toUpperCase() + str.slice(1);
}
let string = "hello";
console.log(capitalizeFirstLetter(string));
