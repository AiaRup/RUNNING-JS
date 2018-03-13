// Individual Exercise 1
var age = prompt('What\'s your age?');
if (age >= 18) {
  alert('You can drink!');
} else {
  alert('Sorry, you can NOT drink!');
}

// Individual Exercise 2
var citizenship = prompt('What\'s your citizenship?');
if (citizenship === 'Israeli') {
  alert('You can Pass');
} else {
  alert('No ENTRY!');
}

// Individual Exercise 3
var myAge = prompt('What\'s your age?');
var gender = prompt('What\'s your gender?');

if (myAge >= 18 && gender === 'female') {
  alert('You can drink for free!');
} else if (myAge >= 18) {
  alert('You can drink but you must pay!');
} else {
  alert('You can\'t drink anything :(');
}