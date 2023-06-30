document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("cal-display");
  const buttons = document.getElementsByClassName("btn");

  let currentValue = "";

  // function evaluateResult() {
  //   const convertedValue = currentValue
  //     .replace("×", "*")
  //     .replace("÷", "/")
  //     .replace("%", "*0.01");
  //   const result = eval(convertedValue);
  //   currentValue = result.toString();
  //   display.value = currentValue;
  // }

  function equal(){
    
  }

  function backspace() {
    display.value = display.value.substring(0, display.value.length - 1);
  }

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function () {
      const value = button.innerText;

      if (value == "C") {
        currentValue = "";
        display.value = currentValue;
      } else if (value == "=") {
        equal();
      } else if (value == "⌫") {
        backspace();
      } else {
        currentValue += value;
        display.value = currentValue;
      }
    });
  }
});
