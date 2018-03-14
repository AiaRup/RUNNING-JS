// Individual Exercise 1
var age = prompt('What\'s your age?');
if (age >= 18) {
  alert('You can drink!');
} else {
  alert('Sorry, you can NOT drink!');
}

// Individual Exercise 2
var citizenship = prompt('What\'s your citizenship?');
if (citizenship.toLowerCase() === 'israeli') {
  alert('You can Pass');
} else {
  alert('No ENTRY!');
}

// Individual Exercise 3
var myAge = prompt('What\'s your age?');
var gender = prompt('What\'s your gender?');

if (myAge >= 18 && gender.toLowerCase() === 'female') {
  alert('You can drink for free!');
} else if (myAge >= 18) {
  alert('You can drink but you must pay!');
} else {
  alert('You can\'t drink anything :(');
}

/* 5 - INTRO TO JAVASCRIPT PART 2
* Partner exercises */

// PARTNER EXERCISE 1
var restaurans = ['kampai', 'gambrinos', 'goomba', 'gatos', 'aroma'];
for (var i = 0; i< restaurans.length; i++) {
  console.log(restaurans[i]);
}

// PARTNER EXERCISE 2
var numbers = [11, 45, 5, 69, 44, 20, 49, 21, 9, 14, 18, 47, 7, 87, 92, 88, 63, 93, 6, 57, 53, 55, 1, 72, 22, 39, 81, 76, 67, 40, 15, 52, 96, 36, 94, 65, 70, 61, 8, 75, 17, 83, 85, 78, 97, 28, 43, 16, 13, 50, 91, 25, 26, 90, 30, 60, 51, 0, 58, 98, 80, 74, 37, 71, 19, 29, 33, 84, 48, 95, 46, 32, 73, 89, 42, 68, 99, 24, 34, 35, 86, 38, 64, 79, 77, 23, 56, 41, 2, 54, 4, 59, 31, 10, 27, 3, 82, 12, 66, 62];

function checkAverage(array) {
  var average = 0;
  for(var i = 0; i< array.length; i++) {
    average += array[i];
  }
  return average / array.length;
}

console.log(checkAverage(numbers));

// PARTNER EXERCISE 3
var myColor = ['Red', 'Green', 'White', 'Black'];
var result = myColor.join(' + ');
console.log(result);

// PARTNER EXERCISE 4
var number = '025468';

function enterSlash(string) {
  var numberArray = string.split('');
  var newArr = numberArray.slice(0);
  for(var j = 0, x = 0; j< numberArray.length; j++, x++) {
    if (numberArray[j] % 2 === 0) {
      if(numberArray[j+1] % 2 === 0){ 
        newArr.splice((x+1),null,'-');
        x++;
      }
    }
  }
  console.log(newArr.join(''));
}

enterSlash(number);


// PARTNER EXERCISE 5
var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function findOccurring(arr) {
  var flag = 0;
  var count = 0;
  var currentCount = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currentCount++;
      }
    }
    if (currentCount > count) {
      flag = i;
      count = currentCount;
    }
    currentCount = 0;
  }
  console.log('Most frequently occuring item of the array: ' + arr[flag]);
}

findOccurring(array);

// PARTNER EXERCISE 6
var arrayOfNumbers = [182, 28, 30, 40, 41, 150, 199, 71, 77, 173, 181, 147, 91, 192, 166, 60, 34, 188, 113, 130, 25, 59, 82, 170, 79, 11, 112, 92, 104, 69, 42, 2, 125, 99, 39, 29, 160, 131, 178, 159, 121, 21, 200, 15, 194, 14, 54, 138, 145, 195, 85, 120, 10, 118, 33, 106, 132, 198, 58, 64, 83, 140, 5, 35, 50, 18, 84, 129, 174, 197, 96, 93, 128, 13, 16, 187, 9, 80, 27, 153, 23, 102, 52, 158, 4, 97, 65, 143, 110, 7, 86, 176, 87, 149, 98, 165, 66, 139, 155, 161, 6, 74, 196, 48, 144, 185, 88, 177, 68, 72, 116, 37, 142, 127, 180, 154, 61, 141, 191, 63, 136, 22, 32, 186, 49, 156, 103, 168, 109, 70, 115, 183, 111, 44, 90, 12, 123, 124, 75, 100, 184, 189, 162, 107, 164, 148, 152, 101, 94, 73, 8, 95, 163, 146, 46, 81, 117, 26, 175, 20, 105, 114, 157, 62, 108, 78, 51, 3, 119, 134, 172, 17, 193, 55, 126, 169, 135, 179, 45, 89, 47, 151, 43, 171, 19, 36, 167, 67, 56, 76, 24, 57, 38, 122, 53, 1, 137, 31, 133];

function findMissingNumber(arr) {
  var missingNumber = 0;
  while(missingNumber < arr.length) {
    var flag = 0;
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] === missingNumber) {
        flag = 1;
        missingNumber++;
        break;
      }
      missingNumber++;
    }
    if (flag === 0) {
      console.log('The missing number is: ' + missingNumber);
    }
  }
}

findMissingNumber(arrayOfNumbers);

