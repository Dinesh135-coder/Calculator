// Store the current input value
const DEFAULT_INPUT = "";
let input = DEFAULT_INPUT;
// Called when a button is clicked (number or operator)
let previousResult = DEFAULT_INPUT;

function resetInput() {
  previousResult = document.getElementById("display").innerText ;
  input = DEFAULT_INPUT;
}
function press(key) {

  // Add the key to the input string
  input += key;

  // Show the updated input on the display
  document.getElementById("display").innerText = input;
}


// Called when the equals button is clicked
function calculate() {
  // If input is empty, do nothing
  try {
    // Use eval to calculate the input
    let result = eval(input);

    // Show the result on the display
    document.getElementById("display").innerText = result;

  }
  catch (error) {
    // If there's an error, show "Error" on the display
    document.getElementById("display").innerText = "Invalid input";
  } finally {
    // Reset the input to default after calculation
    resetInput();
  }
}

function root() {

  try {
    console.log("input=" + input);
    console.log("previousInput=" + previousResult);
    if (input === DEFAULT_INPUT && previousResult != DEFAULT_INPUT) {
      input = previousResult;
    }
    let value = eval(input); // Use input instead of currentInput
    console.log("value=" + value);
    if (value < 0 || value===undefined) {
      document.getElementById("display").innerText = "Invalid ";
    } else {
      let result = Math.sqrt(value);
      console.log("result=" + result);
      document.getElementById("display").innerText = result;
    }
  } catch {
    document.getElementById("display").innerText = "Error";
  } finally {
    resetInput() // Reset input after calculating
  }
}

function square() {
  try {
    let value = eval(input); // Use input instead of currentInput
    let result = value * value;
    document.getElementById("display").innerText = result;
  } catch {
    document.getElementById("display").innerText = "Error";
  } finally {
    resetInput(); // Reset input after calculating
  }
}


// to clear the display
function clearDisplay() {
  input = DEFAULT_INPUT;
  previousResult = DEFAULT_INPUT;
  document.getElementById("display").innerText = "0";
}

function process() { }

// math.sin 
// complete the squre  function NaN error 
// Html css for weather app