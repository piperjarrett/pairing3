var numbers = [1, 2, 3, 4, 5, 6, 7, 99]

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 30) {
    console.log(numbers[i]);
  } else if (numbers[i] < 60) {
    // code to execute if condition number 2 evaluates to true
    console.log("Numbers under 60 " + numbers[i])
  }

}
