// i made an arrow function so that the code is more readable and we learned in school to almost always use arrow functions
const calculate = () => {
  
  // i made 2 variables to store the values of the inputs of the user and i used parseFloat to convert the string to a number
  // i used a const because the values of the inputs will not change
  const firstValue = parseFloat(document.getElementById("firstValue").value);
  const secondValue = parseFloat(document.getElementById("secondValue").value);

  // i made a variable to store the result of the sum of the 2 values
  result = firstValue + secondValue;
  
  //if first value or second value is empty, the user will get an alert
  if (!firstValue || !secondValue) {
    return window.alert("Please enter a number");
  }

  // i used window.alert to show the result to the user
  // you could also use console.log to show the result in the console
  return window.alert(`The result is: ${result}`); //use back ticks when using a variable in a string
};

// as soon as the button to calculate is clicked, the function calculate will be called
// this button is located in the index.html file