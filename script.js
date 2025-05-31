// Store the current input value
const DEFAULT_INPUT = "0";
let input = DEFAULT_INPUT;

// Called when a button is clicked (number or operator)
function press(key) {

  // Add the key to the input string
  input += key;

  // Show the updated input on the display
  document.getElementById("display").innerText = input;
}


// Called when the equals button is clicked
function calculate(){
if (input === "") {
  return;
}
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
    input = "";
  }
}

// to clear the display
function clearDisplay() {
  input = DEFAULT_INPUT;
  document.getElementById("display").innerText = "0";
}


